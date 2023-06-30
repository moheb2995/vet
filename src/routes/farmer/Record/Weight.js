import React,{ useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import DatePickerF from '../../../components/DatePickerF';

const Weight = () => {
  const [show, setshow] = useState(false)
  const [beginning,setbeginning] = useState([])
  const [middle,setmiddle] = useState([])
  const [end,setend] = useState([])
  const [herd_age, setherd_age] = useState('')
  const [date,setdate] = useState('')
  const [value,setvalue] = useState('')
  const [data,setdata] = useState([])
  const [update,setupdate] = useState(false)
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId

  useEffect(()=>{
    for(var i=0; i <= 24; i++) {
      beginning.push('')
      setbeginning(beginning)
    }
    for(var i=0; i <= 24; i++) {
      middle.push('')
      setmiddle(middle)
    }
    for(var i=0; i <= 24; i++) {
      end.push('')
      setend(end)
    }
  },[])

  function putOff(){
    beginning.map((i,inx)=> {beginning[inx] = ''; setupdate(!update); setbeginning(beginning)})
    middle.map((i,inx)=> {middle[inx] = ''; setupdate(!update); setmiddle(middle)})
    end.map((i,inx)=> {end[inx] = ''; setupdate(!update); setend(end)})
    setdate('');setvalue('');setupdate(!update)
  }

  useEffect(()=>{
    HerdAge(setherd_age)
  },[])

  const save =async()=>{
    const body={
      epoch_id, 
      data:{beginning, middle, end},
      date,
      herd_age,
    }
    const token=true
    const method='POST'
    const api=`/api/v1/hen-weight/`
    Fetch(body,token,setdata,method,api,navigate)
    putOff()
  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> وزن مرغ </button>
  <div className={show?"flex ":'hidden'}>
  <div className="btn-b"><Link className='flex items-center' to={`${param}/V_WeightV`}> مشاهده تاریخچه </Link></div>
    <div dir='ltr' className="card1 flex-col ">
      <h3 className="mb-2 mt-3 text-lg ">: ابتدای سالن </h3>
      <div className="flex flex-wrap mx-auto ">
        {beginning.map((i,inx)=>
          <input className='w-20 mx-2.5 my-1.5' value={beginning[inx]} onChange={e => {beginning[inx] = e.target.value; setupdate(!update); setbeginning(beginning)}} type="number" />
          )}
      </div>
      
      <h3 className="mb-2 mt-3 text-lg ">: وسط سالن </h3>
      <div className="flex flex-wrap mx-auto ">
        {middle.map((i,inx)=>
          <input className='w-20 mx-2.5 my-1.5' value={middle[inx]} onChange={e => {middle[inx] = e.target.value; setupdate(!update); setmiddle(middle)}} type="number" />
          )}
      </div>

      <h3 className="mb-2 mt-3 text-lg ">: انتهای سالن</h3>
      <div className="flex flex-wrap mx-auto ">
        {end.map((i,inx)=>
          <input className='w-20 mx-2.5 my-1.5' value={end[inx]} onChange={e => {end[inx] = e.target.value; setupdate(!update); setend(end)}} type="number" />
          )}
      </div>
      <div className="flex justify-between w-full items-end ">
        <div className="flex mr-2">
          <button className={value?'btn-g':'btn-g opacity-60'} onClick={save} disabled={value?false:true} >ثبت</button>
          <button className='btn-r ml-2 ' onClick={putOff}>انصراف</button>
        </div>

        <div className="flex items-end ">
          <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
          <h3 className="mb-2 mt-3 text-lg ">: تاریخ </h3> 
        </div>
      </div>
    </div>
  </div>
</div>
)}
export default Weight
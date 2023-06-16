import React,{ useState, useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import { useNavigate, useParams } from 'react-router-dom'
import HerdAge from '../../../components/HerdAge'
import DatePickerF from '../../../components/DatePickerF';

const Beak = () => {
  const [date, setdate] = useState('2023-10-10')
  const [herd_age, setherd_age] = useState('')
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const [value,setvalue] = useState('')

  const navigate =useNavigate()
  const id = useParams().EpochId

  useEffect(()=>{
    HerdAge(setherd_age)
  },[])

  const save =async()=>{
    const body={ "epoch_id": id, herd_age, date }
    const token=true
    const method='POST'
    const api=`/api/v1/beak-trimming/`
    Fetch(body,token,setdata,method,api,navigate)
  }

  function putOff(){
    setvalue('');
    setdate('')
    setshow(false)
  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> نوک چینی </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1 ">
      <div className="grid grid-cols-1 text-center gap-4 mx-auto ">
        <h5 className="-m-2">تاریخ</h5>
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
      </div>
      <div className="">
        <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
        <button className='btn-g' onClick={save}>ثبت</button>
      </div>
    </div>
  </div>
</div>
)}
export default Beak
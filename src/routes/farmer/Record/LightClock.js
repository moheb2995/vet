import React,{ useState,useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import { useParams, useNavigate } from 'react-router-dom'
import DatePickerF from '../../../components/DatePickerF';

const LightClock = () => {
  const [update,setupdate] = useState(false)
  const [show,setshow] = useState(false)
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')
  const [date, setdate] = useState('')
  const [light_intensity, setlight_intensity] = useState('')
  const [light_color, setlight_color] = useState('')
  const [hours, sethours] = useState([{start_time:'',end_time:''}])
  const [value,setvalue] = useState('')
  
  function putOff(){
    setvalue('');
    setdate('')
    setshow(false)
    setlight_intensity('')
    setlight_color('')
    sethours([{start_time:'',end_time:''}])
  }

  const EpochId = useParams().EpochId
  const navigate =useNavigate()

  useEffect(()=>{
    HerdAge(setherd_age)
  },[])

  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, date, light_color, light_intensity, lighting_hours:hours }
    const token=true
    const method='POST'
    const api=`/api/v1/lighting/`
    Fetch(body,token,setdata,method,api,navigate)
  }

  const plus =()=> {
    hours.push({start_time:'00:00',end_time:'00:00'})
    setupdate(!update)
  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> ساعات روشنایی </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1 flex-wrap">
      <div className="grid grid-cols-3 text-center gap-4 mx-auto ">
        <h5 className="-m-2">رنگ نور</h5>
        <h5 className="-m-2"> شدت نور  (lx)</h5>
        <h5 className="-m-2">تاریخ</h5>
        <input className=''  value={light_color} onChange={e => setlight_color(e.target.value)} />
        <input className=' ' type="number" value={light_intensity} onChange={e => setlight_intensity(e.target.value)} />
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
      </div>
      {hours.map((i,inx)=>{
        return <div key={inx} className="w-full center my-4 ">
          <span className='mx-2'>از</span>
          <input value={i.start_time} onChange={e=> {hours[inx].start_time = e.target.value; sethours(hours); setupdate(!update)}} type="time" />
          <span className='mx-2'>تا</span>
          <input value={i.end_time} onChange={e=> {hours[inx].end_time = e.target.value; sethours(hours); setupdate(!update)}} type="time" />
        </div>}
      )}
      <div className="center w-full -mt-4">
        <button className="text-4xl px-2 text-center " onClick={plus}>+</button>
      </div>
      <div className="flex justify-end w-full">
        <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
        <button className='btn-g' onClick={save}>ثبت</button>
      </div>
    </div>
  </div>
</div>
)}
export default LightClock
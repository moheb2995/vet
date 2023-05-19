import React, { useState  } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Fetch from '../../../../components/Fetch'
import Cookies from "universal-cookie";

const R_BeakV = ({setshow}) => {
  const [date,setdate] = useState('2023-10-10')
  const [data,setdata] = useState([])
  const location = useLocation().pathname
  const navigate =useNavigate()
  const cookies = new Cookies()
  const epoch_id = cookies.get('epoch_id')

  const save =async()=>{
    const body={ epoch_id, herd_age:45, date}
    const token=true
    const method='POST'
    const api=`/api/v1/beak-trimming/`
    Fetch(body,token,setdata,method,api,navigate)
  }
  
return (
<div className={location == '/NavV/OffersV/O_BeakV'?'':'hidden'}>
  <div >
    در تاریخ
    <input className='mx-2 text-center' dir='ltr' value={date} onChange={e => setdate(e.target.value)} />
    نوک چینی را انجام دهید
  </div>
  <div className="flex justify-end mt-10 w-[104%] ">
    <button className='btn-r mx-2' onClick={()=> setshow(false)}>انصراف</button>
    <button className='btn-g ' onClick={save}>ثبت</button>
  </div>
</div>
)}
export default R_BeakV
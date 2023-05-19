import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Fetch from '../../../../components/Fetch'
import Cookies from "universal-cookie";
import HerdAge from '../../../../components/HerdAge';

const R_BeakV = ({setshow}) => {
  const [date,setdate] = useState('2023-10-10')
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')
  const [use, setuse] = useState('EYE_DROP')
  const [name, setname] = useState('NEWCASTLE')

  const location = useLocation().pathname
  const navigate =useNavigate()
  const cookies = new Cookies()
  const epoch_id = cookies.get('epoch_id')

  useEffect(()=>{
    HerdAge(setherd_age)
  },[])

  const save =async()=>{
    const body={ epoch_id, herd_age, date, name, how_to_use:use }
    const token=true
    const method='POST'
    const api=`/api/v1/vaccination/suggestions/`
    Fetch(body,token,setdata,method,api,navigate)
  }
  
return (
<div className={location == '/NavV/OffersV/O_VaccinationV'? "":'hidden'}>
  <div className='grid grid-cols-3 text-center gap-4'>
    <h5 className="h-min -m-2">نام واکسن</h5>
    <h5 className="h-min -m-2">طریقه مصرف</h5>
    <h5 className="h-min -m-2">تاریخ</h5>
      <select className='h-min' onChange={e=>setname(e.target.value)}>
        <option value="NEWCASTLE">NEWCASTLE</option>
      </select>
      <select className='h-min' onChange={e=>setuse(e.target.value)}>
        <option value="EYE_DROP">EYE_DROP</option>
      </select>
    <input className='h-min ' value={date} onChange={e => setdate(e.target.value)} />
  </div>
  <div className="flex justify-end mt-10 w-[104%] ">
    <button className='btn-r mx-2' onClick={()=> setshow(false)}>انصراف</button>
    <button className='btn-g ' onClick={save}>ثبت</button>
  </div>
</div>
)}
export default R_BeakV
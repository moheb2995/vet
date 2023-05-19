import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Cookies from "universal-cookie";
import HerdAge from '../../../components/HerdAge';

const Vaccination = () => {
  const [date,setdate] = useState('2023-10-10')
  const [age, setage] = useState('')
  const [use, setuse] = useState('EYE_DROP')
  const [name, setname] = useState('NEWCASTLE')
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')

  const navigate =useNavigate()
  const cookies = new Cookies()
  const epoch_id = cookies.get('epoch_id')

  useEffect(()=>{
    HerdAge(setherd_age)
  },[])
  
  const save =async()=>{
    const body={ epoch_id, herd_age, date, name, how_to_use: use}
    const token=true
    const method='POST'
    const api=`/api/v1/vaccination/`
    Fetch(body,token,setdata,method,api,navigate)
  }
  
return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> واکسیناسیون </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1">
      <div className="grid grid-cols-4 text-center gap-4">
        <h5 className="-m-2">نام واکسن</h5>
        <h5 className="-m-2">طریقه مصرف</h5>
        <h5 className="-m-2">سن</h5>
        <h5 className="-m-2">تاریخ</h5>
        <select onChange={e=>setname(e.target.value)}>
          <option value="NEWCASTLE">NEWCASTLE</option>
        </select>
        <select onChange={e=>setuse(e.target.value)}>
          <option value="EYE_DROP">EYE_DROP</option>
        </select>
        <input className='' value={age} onChange={e => setage(e.target.value)} />
        <input className='' value={date} onChange={e => setdate(e.target.value)} />
      </div>
      <div className="">
        <button className='btn-r mx-2'>انصراف</button>
        <button className='btn-g' onClick={save}>ثبت</button>
      </div>
    </div>
  </div>
</div>)}
export default Vaccination
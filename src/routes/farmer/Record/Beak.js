import React,{ useState, useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import { useNavigate } from 'react-router-dom'
import HerdAge from '../../../components/HerdAge'
import Cookies from "universal-cookie";

const Beak = () => {
  const [date, setdate] = useState('2023-10-10')
  const [herd_age, setherd_age] = useState('')
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  
  const cookies = new Cookies()
  const id = cookies.get('epoch_id')

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


return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> نوک چینی </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1 ">
      <div className="grid grid-cols-1 text-center gap-4">
        <h5 className="-m-2">تاریخ</h5>
        <input className='' value={date} onChange={e => setdate(e.target.value)} />
      </div>
      <div className="">
        <button className='btn-r mx-2'>انصراف</button>
        <button className='btn-g' onClick={save}>ثبت</button>
      </div>
    </div>
  </div>
</div>
)}
export default Beak
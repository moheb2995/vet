import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const O_BeakV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/beak-trimming/suggestions/?epoch_id=16a399e0-7ec3-4f3f-a883-c70ba988190b`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className="flex justify-center flex-col text-center">
  {data.map(i=>
    <div key={i.id} className="border-2 rounded-3xl m-2 p-5 md:px-16 px-4 max-w-[700px] ">
      <h2 className="text-lg text-orange-500"> {i.herd_age} روزگی </h2>
      <h2 className="">
      نوک چینی در تاریخ {i.suggested_at} انجام شد 
      </h2>
    </div>
  )}
  
</div>
)}
export default O_BeakV
import React,{ useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const V_BeakV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/beak-trimming/?epoch_id=${id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className="center">
  <div className="flex flex-col text-center">
    {data.map(i => 
      <div className="border-2 rounded-3xl m-2 p-5 md:px-24 px-4 max-w-[700px] ">
        {/* <h2 className="text-lg text-orange-500"> {i.herd_age} روزگی </h2> */}
        <h2 className="">
        نوک چینی در تاریخ <span className='mx-1' dir='ltr'>{i.date}</span> انجام شد 
        </h2>
      </div>
    )}
  </div>
</div>
)}
export default V_BeakV
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const V_LightClockV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/lighting/?epoch_id=${id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className="flex justify-center text-center">
  <div className="border-2 rounded-3xl m-2 p-4 md:px-16 px-4 ">
    <div className="grid grid-cols-5 text-center gap-4">
      <h5 className="my-2">تاریخ</h5>
      <h5 className="my-2">رنگ نور</h5>
      <h5 className="my-2">شدت نور</h5>
      <h5 className="my-2">ساعات</h5>
      <h5 className="my-2"> کل مدت  </h5>
      <h6 className="">dfb</h6>
      <h6 className="">nhyyyj</h6>
      <h6 className="">uyk</h6>
      <select name="" id="">
        <option value="">jhvjxd</option>
      </select>
      <h6 className="">yiky</h6>
    </div>
  </div>
</div>
)}
export default V_LightClockV
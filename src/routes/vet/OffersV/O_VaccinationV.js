import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Cookies from "universal-cookie";

const O_VaccinationV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const cookies = new Cookies()
  const epoch_id = cookies.get('epoch_id')
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/vaccination/suggestions/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className="flex justify-center">
  <div className="flex flex-col text-center">
    {data.map(i=>
    <div key={i.id} className="border-2 border-yellow-300 border-green-400 shadow-md rounded-3xl m-2 mb-4 p-5 md:px-14 px-4 max-w-[700px] ">
      <div className="grid grid-cols-4 text-center gap-4 mb-4">
        <h5 className="my-2">نام واکسن</h5>
        <h5 className="my-2">طریقه مصرف</h5>
        <h5 className="my-2">سن</h5>
        <h5 className="my-2">تاریخ</h5>
        <h6 className="">{i.name} </h6>
        <h6 className="">{i.how_to_use} </h6>
        <h6 className="">{i.herd_age} </h6>
        <h6 className="">{i.date} </h6>
      </div>
      <div className="flex -mb-[34px] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-5 ">  تاریخ ثبت {'1402/01/23'} </div>
      </div>
    </div>
    )}
  </div>
</div>
)}
export default O_VaccinationV
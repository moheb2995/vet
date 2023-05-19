import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Cookies from "universal-cookie";

const V_VaccinationV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const cookies = new Cookies()
  const epoch_id = cookies.get('epoch_id')
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/vaccination/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className="flex justify-center">
  <div className="flex justify-center flex-col text-center">
    {data.map(i=>
      <div className="border-2 rounded-3xl xl:w-[35vw] w-[45vw] m-2 p-5 md:px-14 px-4 max-w-[700px] ">
        <div className="grid grid-cols-4 text-center gap-4">
          <h5 className="-m-2">نام واکسن</h5>
          <h5 className="-m-2">طریقه مصرف</h5>
          <h5 className="-m-2">سن</h5>
          <h5 className="-m-2">تاریخ</h5>
          <h6 className="">{i.name} </h6>
          <h6 className="">{i.how_to_use} </h6>
          <h6 className="">{i.herd_age} </h6>
          <h6 className="">{i.date} </h6>
        </div>
      </div>
    )}
  </div>
</div>
)}
export default V_VaccinationV
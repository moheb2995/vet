import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const O_VaccinationV = () => {
  const [data,setdata] = useState([
    {
        "id": "cc1268ab-9b3e-4a82-9988-a532c84100cd",
        "date": "2023-06-16",
        "suggested_at": "2023-05-14",
        "": "PENDING",
        "herd_age": 46,
        "name": "MAREK",
        "how_to_use": "SPRAY"
    },
    {
        "id": "bfdf359d-377e-49e4-ac2d-e78442dce383",
        "date": "2023-06-16",
        "suggested_at": "2023-05-13",
        "status": "PENDING",
        "herd_age": 46,
        "name": "MAREK",
        "how_to_use": "SPRAY"
    },
    {
        "id": "08094d7c-e91f-4e22-8eaa-0f817017f6f8",
        "date": "2023-06-15",
        "suggested_at": "2023-05-13",
        "status": "PENDING",
        "herd_age": 45,
        "name": "MAREK",
        "how_to_use": "SPRAY"
    },
    {
        "id": "ecb634e2-b16e-4acd-93e0-b2772c803b38",
        "date": "2023-06-15",
        "suggested_at": "2023-05-12",
        "status": "PENDING",
        "herd_age": 45,
        "name": "MAREK",
        "how_to_use": "SPRAY"
    }
])
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/vaccination/suggestions/?epoch_id=${epoch_id}`
    // Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className="flex justify-center">
  <div className="flex flex-col text-center">
    {data.map(i=>
    <div key={i.id} className="border-2 rounded-3xl m-2 mb-4 p-5 md:px-14 px-4 max-w-[700px] ">
      <div className="grid grid-cols-5 text-center mb-4">
        <h5 className="mb-2 border-l px-2">نام واکسن</h5>
        <h5 className="mb-2 border-l px-2">طریقه مصرف</h5>
        <h5 className="mb-2 border-l px-2">سن</h5>
        <h5 className="mb-2 border-l px-2">تاریخ</h5>
        <h3 className="mb-2"> وضعیت : </h3>
        <h6 className="">{i.name} </h6>
        <h6 className="">{i.how_to_use} </h6>
        <h6 className="">{i.herd_age} </h6>
        <h6 className="">{i.date} </h6>
        <p className="">{i.status == 'PENDING'?'در انتظار':i.status == 'DONE'?'انجام شده':'پذیرفته نشده'} </p>
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
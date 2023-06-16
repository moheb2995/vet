import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const V_VaccinationV = () => {
  const [data,setdata] = useState([
    {
        "id": "519505b6-7cc0-4d36-9c7b-95a5ee53b0b7",
        "date": "2023-07-07",
        "name": "NEWCASTLE",
        "how_to_use": "EYE_DROP",
        "herd_age": 37
    },
    {
        "id": "c4547b3f-ef62-4e36-86d8-7a1ef7ce61e9",
        "date": "2023-06-07",
        "name": "NEWCASTLE",
        "how_to_use": "EYE_DROP",
        "herd_age": 37
    },
    {
        "id": "41c032ee-d35b-488c-9e2e-f683bd5933e6",
        "date": "2023-06-07",
        "name": "NEWCASTLE",
        "how_to_use": "EYE_DROP",
        "herd_age": 37
    },
    {
        "id": "a0d4986a-42b1-4107-93f8-a07594ed9413",
        "date": "2023-06-07",
        "name": "NEWCASTLE",
        "how_to_use": "EYE_DROP",
        "herd_age": 37
    },
    {
        "id": "30efa064-31eb-4277-af45-4c4d90af7c3c",
        "date": "2023-06-08",
        "name": "NEWCASTLE",
        "how_to_use": "EYE_DROP",
        "herd_age": 38
    },
    {
        "id": "49ab19df-9f5d-49ab-888b-f7d8f0c74877",
        "date": "2023-06-10",
        "name": "NEWCASTLE",
        "how_to_use": "EYE_DROP",
        "herd_age": 40
    }
])
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/vaccination/?epoch_id=${epoch_id}`
    // Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className="flex justify-center">
  <div className="flex justify-center flex-col text-center">
    {data.map(i=>
      <div className="border-2 rounded-3xl xl:w-[60vw] m-2 p-5 md:px-14 px-4 ">
        <div className="grid grid-cols-4 text-center gap-4">
          <h5 className="-m-2 border-l px-1 ">نام واکسن</h5>
          <h5 className="-m-2 border-l px-1 ">طریقه مصرف</h5>
          <h5 className="-m-2 border-l px-1 ">سن</h5>
          <h5 className="-m-2 px-1 ">تاریخ</h5>
          <h6 className="px-1">{i.name} </h6>
          <h6 className="px-1">{i.how_to_use} </h6>
          <h6 className="px-1">{i.herd_age} </h6>
          <h6 className="px-1">{i.date} </h6>
        </div>
      </div>
    )}
  </div>
</div>
)}
export default V_VaccinationV
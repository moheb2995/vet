import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const O_Vaccination = () => {
  const [data,setdata] = useState([
    {
        "id": "cc1268ab-9b3e-4a82-9988-a532c84100cd",
        "date": "2023-06-16",
        "suggested_at": "2023-05-14",
        "status": "PENDING",
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
<>
  <h1 className=" text-center text-2xl mb-4"> واکسیناسیون پیشنهادی دامپزشک </h1>
  <div className='center'>
    <div className="flex flex-col text-center">
      {data.map(i=>
      <div className="border-2 rounded-xl w-[65vw] m-2 p-3.5 px-7 max-w-[800px] mb-4">
        <div className="grid grid-cols-5 ">
          <h3 className=" border-l px-1"> نام واکسن </h3>
          <h3 className=" border-l px-1"> طریقه مصرف </h3>
          <h3 className=" border-l px-1"> سن </h3>
          <h3 className=" border-l px-1"> تاریخ </h3>
          <h3 className=""> وضعیت </h3>
          <h6 className="mt-2">{i.name} </h6>
          <h6 className="mt-2">{i.how_to_use} </h6>
          <h6 className="mt-2">{i.herd_age} </h6>
          <h6 className="mt-2">{i.date} </h6>
          <p className="mt-2">{i.status == 'PENDING'?'در انتظار':i.status == 'DONE'?'انجام شده':'پذیرفته نشده'} </p>
        </div>
        <p className="text-right mt-4">jkfgbjdfksgvb jfvbsdzjkvdsfkv sdjkfbdskvbdsv kjdsfds</p> <br />
        <div className="flex justify-between -mb-[30px] w-[100%] ">
          <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 "> تاریخ ثبت {'1402/01/23'} </div>
          <div className="">
            <button className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>
            <button className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>
          </div>
        </div>
      </div>
      )}
    </div>
  </div>
</>
)}
export default O_Vaccination
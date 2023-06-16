import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const O_LightClockV = () => {
  const [data,setdata] = useState([
    {
        "id": "3cc35376-d603-4887-8b5b-4c289cf7b7dc",
        "date": "2023-06-10",
        "total_lighting_hours": "05:50:00",
        "light_color": "yellow",
        "light_intensity": "5.00",
        "herd_age": 40,
        "lighting_hours": [
            {
                "start_time": "09:00:00",
                "end_time": "11:15:00"
            },
            {
                "start_time": "13:00:00",
                "end_time": "16:35:00"
            }
        ],
        "suggested_at": "2023-06-02",
        "status": "PENDING"
    },
    {
        "id": "caca020c-46c0-484f-91b8-8e244b38a9f4",
        "date": "2023-06-10",
        "total_lighting_hours": "05:50:00",
        "light_color": "yellow",
        "light_intensity": "5.00",
        "herd_age": 40,
        "lighting_hours": [
            {
                "start_time": "09:00:00",
                "end_time": "11:15:00"
            },
            {
                "start_time": "13:00:00",
                "end_time": "16:35:00"
            }
        ],
        "suggested_at": "2023-06-02",
        "status": "PENDING"
    }
])
  const navigate =useNavigate()
  const EpochId = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/lighting/suggestions/?epoch_id=${EpochId}`
    // Fetch(body,token,setdata,method,api,navigate) 
  },[])

if(data.length === 0)return <h1 className="text-center text-xl italic"> پیشنهادی وجود ندارد</h1>
return (
<div className="flex justify-center text-center">
  <div className="flex flex-col">
    {data.map(i=><div key={i.id} className="border-2 rounded-xl 2xl:w-[50vw] m-2 p-6 px-10 w-[68vw] mb-4">
      <div className="grid grid-cols-6 gap-1 mb-4">
        <h3 className=""> تاریخ </h3>
        <h3 className=""> رنگ نور </h3>
        <h3 className=""> شدت نور </h3>
        <h3 className=""> کل مدت روشنایی  </h3>
        <h3 className=""> ساعات روشنایی </h3>
        <h3 className=""> وضعیت </h3>

        <p className="">{i.date}</p>
        <p className="">{i.light_color} </p>
        <p className="">{i.light_intensity} </p>
        <p className="">{i.total_lighting_hours} </p>
        <p className='mx-[6%] w-[88%] '>
          {i.lighting_hours.map(i=><div className='text-sm'>{i.start_time}-{i.end_time} </div>)}
        </p>
        <p className="mt-2">{i.status == 'PENDING'?'در انتظار':i.status == 'DONE'?'انجام شده':'پذیرفته نشده'} </p>
      </div>
      <div className="flex justify-between -mb-10 w-[102%] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت {i.suggested_at} </div>
      </div>
    </div>
    )}
  </div>
</div>
)}
export default O_LightClockV
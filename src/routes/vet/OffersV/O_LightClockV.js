import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Gregorian_to_jalali from '../../../components/Gregorian_to_jalali'

const O_LightClockV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const EpochId = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/lighting/suggestions/?epoch_id=${EpochId}`
    Fetch(body,token,setdata,method,api,navigate) 
  },[])

if(data.length === 0)return <h1 className="text"> پیشنهادی هنوز ثبت نشده</h1>
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

        <p className="">{Gregorian_to_jalali(i.suggested_at)}</p>
        <p className="">{i.light_color} </p>
        <p className="">{i.light_intensity} </p>
        <p className="">{i.total_lighting_hours} </p>
        <p className='mx-[6%] w-[88%] '>
          {i.lighting_hours.map(i=><div className='text-sm'>{i.start_time}-{i.end_time} </div>)}
        </p>
        <p className="mt-2">{i.status == 'PENDING'?'در انتظار':i.status == 'DONE'?'انجام شده':'پذیرفته نشده'} </p>
      </div>
      <div className="flex justify-between -mb-10 w-[102%] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت {i.date} </div>
      </div>
    </div>
    )}
  </div>
</div>
)}
export default O_LightClockV
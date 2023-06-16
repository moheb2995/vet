import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const V_LightClockV = () => {
  const [data,setdata] = useState([
    {
        "id": "2c3e21ce-6702-4934-a0bd-17d19ceca06f",
        "date": "2023-06-07",
        "total_lighting_hours": "07:29:00",
        "light_color": "blue",
        "light_intensity": 12,
        "herd_age": 37,
        lighting_hours: [
            {
                "start_time": "06:00:00",
                "end_time": "07:30:00"
            },
            {
                "start_time": "12:10:00",
                "end_time": "14:55:00"
            },
            {
                "start_time": "16:46:00",
                "end_time": "20:00:00"
            }
        ]
    }
])
  const navigate =useNavigate()
  const id = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/lighting/?epoch_id=${id}`
    // Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className="flex justify-center text-center">
  {data.map(i=>
    <div key={i.id} className="border-2 rounded-3xl m-2 p-4 md:px-12 px-4 ">
      <div className="grid grid-cols-5 text-center gap-4">
        <h5 className="my-2 border-l border-[#707070]">تاریخ</h5>
        <h5 className="my-2 border-l border-[#707070]">رنگ نور</h5>
        <h5 className="my-2 border-l border-[#707070]">شدت نور</h5>
        <h5 className="my-2 border-l border-[#707070]">ساعات</h5>
        <h5 className="my-2 "> کل مدت  </h5>
        <h6 className="">{i.date} </h6>
        <h6 className="">{i.light_color} </h6>
        <h6 className="">{i.light_intensity} </h6>
        {/* <select name="" id="">
          <option value="">jhvjxd</option>
        </select> */}
        <div className="flex flex-col">
          {i.lighting_hours.map(i=>
            <div className="">{i.start_time} - {i.end_time} </div>
          )} 
        </div>
        <h6 className="">{i.total_lighting_hours} </h6>
      </div>
    </div>
  )}
</div>
)}
export default V_LightClockV
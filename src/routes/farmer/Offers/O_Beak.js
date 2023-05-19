import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import Cookies from "universal-cookie";

const O_Beak = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const cookies = new Cookies()
  const epoch_id = cookies.get('epoch_id')

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/beak-trimming/suggestions/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className="flex justify-center flex-col text-center">
  {data.map(i =>
    <div className="border-2 rounded-xl xl:w-[30vw] w-[40vw] m-4 p-3.5 px-7 max-w-[800px] mx-auto ">
      <div className="mb-4 grid grid-cols-2">
        <div>
          <h4 className="my-2">تاریخ</h4>
          <h4 className="my-2">سن</h4>
        </div>
        <div>
          <p className="my-2">{i.herd_age} </p>
          <p className="my-2">{i.suggested_at} </p>
        </div>
      </div>
      <div className="flex justify-between -mb-[30px] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 "> تاریخ ثبت {'1402/01/23'} </div>
        <div className="">
          <button className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>
          <button className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>
        </div>
      </div>
    </div>
  )}
</div>
)}
export default O_Beak
import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const O_Ration = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const EpochId = useParams().EpochId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1//?epoch_id=${EpochId}`
    // Fetch(body,token,setdata,method,api,navigate) 
  },[])

if(data.length === 0)return <h1 className="text"> پیشنهادی وجود ندارد</h1>
return (
<>
  <h1 className=" text-center text-2xl mb-4"> جیر ه های پیشنهادی دامپزشک </h1>

  <div className="flex justify-center text-center">
    <div className="border-2 rounded-xl xl:w-[46vw] w-[65vw] m-2 p-6 px-12 max-w-[800px]  ">
      <table className='mb-4'>
        <thead>
          <th className="th_Ration"> نوع جیره </th>
          <th className="th_Ration"> مقدار </th>
          <th className="th_Ration"> وضعیت </th>
        </thead>
        <tbody>
          <tr>
            <td className="t_Ration">gfd</td>
            <td className="t_Ration">fdb</td>
            <td className="t_Ration">dfxbd</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between -mb-10 w-[103%] ">
        <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-5 "> تاریخ ثبت {'1402/01/23'} </div>
        <div className="">
          <button className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>
          <button className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>
        </div>
      </div>
    </div>
  </div>
</>
)}
export default O_Ration
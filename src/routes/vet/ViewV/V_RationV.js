import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'

const V_RationV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId
  
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/vaccination/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])
  
if(data.length === 0)return <h1 className="text"> اطلاعاتی هنوز ثبت نشده</h1>
return (
<div className='center mt-4'>
  <table className='text-center w-3/5 '>
    <thead>
      <tr className="">
        <th className="th_Ration"> نوع جیره </th>
        <th className="th_Ration"> مقدار </th>
        <th className="th_Ration"> تاریخ </th>
      </tr>
    </thead>
    {data.map(i=>
      <tbody>
        <tr>
        <td className=" p-0">{i.data.map((i)=><div className="t_Ration">{i.name} </div> )}</td>
        <td className=" p-0">{i.data.map((i)=><div className="t_Ration">{i.amount}</div> )}</td>          
        <td className="t_Ration">{i.date}</td>
        </tr>
      </tbody>
    )}
    <tfoot className='text-center '>
      <td></td>
    </tfoot>
  </table>
</div>
)}
export default V_RationV
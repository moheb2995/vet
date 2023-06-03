import React, { useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../components/Fetch'

const Salons = () => {
  const [data,setdata] = useState(undefined)
  const navigate =useNavigate()
  const id = useParams().userId
  // const id = useParams().userId

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/salons/?farmer_id=${id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

if(!data) return 'loading'
return (
<div className="center">
  <div className='flex flex-col'>
    {data.map(i=>
      <Link to={`salonId/${i.id}`} className="border px-8 py-3 rounded-xl m-2 bg-slate-50 shadow w-[30vw] text-center text-lg ">
        {i.name}
      </Link>
    )}
  </div>
</div>
)}
export default Salons
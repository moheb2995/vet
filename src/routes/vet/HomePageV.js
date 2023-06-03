import React, { useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../components/Fetch'

const HomePageV = () => {
   const [data,setdata] = useState(undefined)
   const navigate =useNavigate()
   const id = useParams().id


   useEffect(()=>{
      const body=undefined
      const token=true
      const method='GET'
      const api=`/api/v1/farmers/?vet_id=${id}`
      Fetch(body,token,setdata,method,api,navigate)
   },[])
   if(!data) return 'loading'
return (
<div className='flex justify-center flex-wrap gap-6 '>
   {data.map(i => 
   <Link to={`userId/${i.id}`} className="border-2 py-6 px-3 w-56 h-28 rounded-xl bg-slate-100 shadow-md center items-center">
      خانم/آقای 
      {i.first_name} {i.last_name}
   </Link>
   )}
</div>
)}
export default HomePageV
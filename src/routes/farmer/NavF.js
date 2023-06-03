import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate, Outlet, useParams } from 'react-router-dom'
import Fetch from '../../components/Fetch'

const NavF = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().id
  const EpochId = useParams().EpochId
  const params = useParams()
  const param = `HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${EpochId}`

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/user-info/`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<>
<div className='bg-[#6FFF7D] flex justify-between items-center p-2'>
  <div className="flex items-center">
    <img src="/img/download (1).jfif" alt="" className="rounded-full w-16 h-14 mx-2" />
    <h2 className="bold">{data.first_name} {data.last_name} </h2>
    <nav className={EpochId?"mx-6":'hidden'}>
      <NavLink className={({isActive}) => isActive? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} to={`${param}/Record`}>ثبت اطلاعات </NavLink>
      <NavLink className={({isActive}) => isActive? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} to={`${param}/View`}>مشاهده اطلاعات </NavLink>
      <NavLink className={({isActive}) => isActive? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} to={`${param}/NavO`}>پیشنهادات دامپزشک </NavLink>
    </nav>
  </div>
  <NavLink className='nav text-slate-700 bold bg-slate-50 rounded' to={`/NavF/HomePage/${id}`}>
    <img src="/img/home button.png" alt="" className="w-36 " />
  </NavLink>
</div>

<div className="px-10 py-6"><Outlet/></div>
</>
)}
export default NavF
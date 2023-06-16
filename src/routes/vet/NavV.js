import React, { useEffect, useState } from 'react'
import { NavLink,Link, Outlet, useParams,useNavigate } from 'react-router-dom'
import Fetch from '../../components/Fetch'

const NavV = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().id
  const params = useParams()
  const param = `HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}`

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/user-info/`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<>
  <div className='bg-[#6FFFF1] flex justify-between items-center p-2'>
    <div className="flex items-center">
    <Link className='nav text-slate-700 bold bg-slate-50 rounded' to={`/NavV/HomePageV/${id}`}>
      <img src="/img/home button.png" alt="" className="w-36 " />
    </Link>
      <nav className={params.EpochId?"mx-6":'hidden'}>
        <NavLink 
          className={({isActive}) => isActive? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} 
          to={`${param}/OffersV`}
          > پیشنهادات دامپزشک 
        </NavLink>
        <NavLink 
          className={({isActive}) => isActive? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} 
          to={`${param}/ViewV`}
          > مشاهده اطلاعات مرغداری 
        </NavLink>
      </nav>
    </div>
    <div className="flex flex-col mx-4 ">
      <img src="/img/download (1).jfif" alt="" className="rounded-full w-12 h-10 mx-auto " />
      <h2 className="bold text-sm">{data.first_name} {data.last_name} </h2>
    </div>
  </div>

  <div className="px-10 py-6"><Outlet/></div>
</>
)}
export default NavV
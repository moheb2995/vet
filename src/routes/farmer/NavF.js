import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import Fetch from '../../components/Fetch'
import { myContext } from '../../context'

const NavF = () => {
  const {epoch,setepoch} = useContext(myContext)
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().id
  const EpochId = useParams().EpochId
  const params = useParams()
  const param = `HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${EpochId}`

  console.log(epoch);
  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/user-info/`
    Fetch(body,token,setdata,method,api,navigate)
  },[])
  // console.log(epoch);

return (
<>
  <div className=''>
    <div className="bg-[#6FFF7D] flex justify-between items-center p-2">
      <div className="flex items-center">
        <NavLink className='nav text-slate-700 bold bg-slate-50 rounded' to={`/NavF/HomePage/${id}`}>
          <img src="/img/home button.png" alt="" className="w-36 " />
        </NavLink>
        <nav className={EpochId?"mx-4":'hidden'}>
          <div className={epoch.is_active?"inline-block":'hidden'}><NavLink className={({isActive}) => isActive? 'activnav':'nav'} to={`${param}/Record`}>ثبت اطلاعات </NavLink></div>
          <NavLink className={({isActive}) => isActive? 'activnav':'nav'} to={`${param}/View`}>مشاهده اطلاعات </NavLink>
          <NavLink className={({isActive}) => isActive? 'activnav':'nav'} to={`${param}/NavO`}>پیشنهادات دامپزشک </NavLink>
        </nav>
      </div>
      <div className="flex flex-col mx-4 ">
        <img src="/img/download (1).jfif" alt="" className="rounded-full w-12 h-10 mx-auto " />
        <h2 className="bold text-sm">{data.first_name} {data.last_name} </h2>
      </div>
    </div>

    <div className="px-10 mt-2">
      <Link to={`/NavF/HomePage/${id}`} className='ads_bar'>{params.id?' سالن ها ':''} </Link>
      <Link to={`/NavF/HomePage/${id}/SalonId/${params.SalonId}`} className='ads_bar'>
        {params.SalonId?`/ سالن ${epoch.salon_name?epoch.salon_name:''} `:''}
      </Link>
      <div className={EpochId?"ads_barr inline-block":'hidden'}>/ دوره {`${epoch.is_active?' فعال ':'غیر فعال'}`}</div>
      <div className={epoch.is_active?"inline-block mx-1":'hidden'}> ({epoch.herd_age} روزگی)</div>
    </div>
  </div>

  <div className="px-10 py-6"><Outlet/></div>
</>
)}
export default NavF
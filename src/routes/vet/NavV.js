import React, { useEffect, useState } from 'react'
import { NavLink,Link, Outlet, useLocation } from 'react-router-dom'

const NavV = () => {
  // const [check,setcheck] = useState('')
  const location  = useLocation()
  // console.log(location);

return (
<>
<div className='bg-[#6FFFF1] flex justify-between items-center p-2'>
  <div className="flex items-center">
    <img src="/img/download (1).jfif" alt="" className="rounded-full w-16 h-14 mx-2" />
    <h2 className="bold">داوود خدادوست</h2>
    <nav className={location.pathname === '/NavV/HomePageV'? 'hidden': "mx-6"}>
      <NavLink className={({isActive}) => isActive? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} to={'/NavV/OffersV'}> پیشنهادات دامپزشک </NavLink>
      <NavLink className={({isActive}) => isActive? 'nav text-slate-700 bold bg-slate-50 rounded':'nav'} to={'/NavV/ViewV'}> مشاهده اطلاعات مرغداری </NavLink>
    </nav>
  </div>
  <Link className='nav text-slate-700 bold bg-slate-50 rounded' to={'/NavV/HomePageV'}>
    <img src="/img/home button.png" alt="" className="w-36 " />
  </Link>
</div>

<div className="px-10 py-6"><Outlet/></div>
</>
)}
export default NavV
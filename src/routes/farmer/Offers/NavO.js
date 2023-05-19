import React, { useState ,useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavO = () => {


return (
<div className='flex gap-10'>
  <nav className='border flex flex-col p-2 px-6 shadow-xl rounded-3xl text-center'>
    <NavLink to={'/NavF/NavO/O_Vaccination'} className={({isActive}) => isActive? 'active':'not_active'}> واکسیناسیون </NavLink> <hr />
    <NavLink to={'/NavF/NavO/O_Ration'} className={({isActive}) => isActive? 'active':'not_active'}> جیره </NavLink> <hr />
    <NavLink to={'/NavF/NavO/O_LightClock'} className={({isActive}) => isActive? 'active':'not_active '}> ساعات روشنایی </NavLink> <hr />
    <NavLink to={'/NavF/NavO/O_Beak'} className={({isActive}) => isActive? 'active':'not_active'}> نوک چینی </NavLink> <hr />
    <NavLink to={'/NavF/NavO/O_prescription'} className={({isActive}) => isActive? 'active':'not_active'}> نسخه </NavLink> 
  </nav>

  <div className="w-full ">
    <div className="flex justify-end mb-6">
      <button className='active w-auto p-2 px-5 shadow-md'> اتمام دوره پرورش </button>
    </div>
    <Outlet/>
  </div>
</div>
)}
export default NavO
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavH = () => {

return (
<>
<div className='bg-[#6FFF7D] flex justify-between items-center p-2'>
  <div className="flex items-center">
    <img src="/img/download (1).jfif" alt="" className="rounded-full w-16 h-14 mx-2" />
    <h2 className="bold">داوود خدادوست</h2>
  </div>
  <NavLink className='nav text-slate-700 bold bg-slate-50 rounded' to={'/NavF/HomePage'}>
    <img src="/img/home button.png" alt="" className="w-36 " />
  </NavLink>
</div>

<div className="px-10 py-6"><Outlet/></div>
</>
)}
export default NavH
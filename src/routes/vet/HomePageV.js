import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HomePageV = () => {
// const [update, setupdate] = useState(false)

return (
<div className='flex justify-center flex-wrap gap-6 '>
  <Link to={'/NavV/OffersV'} className="border-2 py-6 px-3 w-56 h-28 rounded-xl bg-slate-100 shadow-md center items-center">
    خانم/آقای  
  </Link>

  <button className="border-2 py-6 px-3 w-56 h-28 rounded-xl bg-slate-100 shadow-md center items-center">
     خانم/آقای محمدی 
  </button>
  <button className="border-2 py-6 px-3 w-56 h-28 rounded-xl bg-slate-100 shadow-md center items-center">
     خانم/آقای محمدی 
  </button>
  <button className="border-2 py-6 px-3 w-56 h-28 rounded-xl bg-slate-100 shadow-md center items-center">
     خانم/آقای محمدی 
  </button>
  <button className="border-2 py-6 px-3 w-56 h-28 rounded-xl bg-slate-100 shadow-md center items-center">
     خانم/آقای محمدی 
  </button>

</div>
)}
export default HomePageV
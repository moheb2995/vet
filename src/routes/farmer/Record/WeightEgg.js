import React,{ useState, useEffect } from 'react'

const WeightEgg = () => {
  // const [date, setdate] = useState('')
  const [show, setshow] = useState(false)



return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> تلفات </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1">
      
    </div>
  </div>
</div>)}
export default WeightEgg
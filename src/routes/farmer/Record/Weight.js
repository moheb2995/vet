import React,{ useState, useEffect } from 'react'

const Weight = () => {
  const [show, setshow] = useState(false)

  
return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> وزن مرغ </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1">
      
    </div>
  </div>
</div>)}
export default Weight
import React,{ useState, useEffect } from 'react'

const LightClock = () => {
  const [date, setdate] = useState('')
  const [number, setnumber] = useState('')
  const [light, setlight] = useState('')
  const [time, settime] = useState('')
  const [show, setshow] = useState(false)

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> ساعات روشنایی </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1 flex-wrap">
      <div className="grid grid-cols-3 text-center gap-4 ">
        <h5 className="-m-2">رنگ نور</h5>
        <h5 className="-m-2"> شدت نور </h5>
        <h5 className="-m-2">تاریخ</h5>
        <input className=' ' type="number" value={number} onChange={e => setnumber(e.target.value)} />
        <input className='' type="number" value={light} onChange={e => setlight(e.target.value)} />
        <input className='' value={date} onChange={e => setdate(e.target.value)} />
      </div>
      <div className="w-full center my-4 "> 
        <span className='mx-2'>از</span>
        <input value={time} onChange={e => settime(e.target.value)} type="time" />
        <span className='mx-2'>تا</span>
        <input type="time" />
      </div>
      <div className="center w-full -mt-4">
        <button className="text-4xl px-2 text-center ">+</button>
      </div>
      <div className="flex justify-end w-full">
        <button className='btn-r mx-2'>انصراف</button>
        <button className='btn-g'>ثبت</button>
      </div>
    </div>
  </div>
</div>
)}
export default LightClock
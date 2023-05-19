import React from 'react'

const O_LightClock = () => {
return (
<div className="flex justify-center text-center">
  <div className="border-2 rounded-xl 2xl:w-[50vw] m-2 p-6 px-12 w-[65vw] max-w-[800px] ">
    <div className="grid grid-cols-5 gap-1 mb-4">
    <h3 className=""> تاریخ : </h3>
      <h3 className=""> رنگ نور : </h3>
      <h3 className=""> شدت نور : </h3>
      <h3 className=""> کل مدت روشنایی  : </h3>
      <h3 className=""> ساعات روشنایی : </h3>
      <p className="">errg</p>
      <p className="">tbs</p>
      <p className="">trs</p>
      <p className="">trsb</p>
      <select className='mx-[6%] w-[88%] '>
        <option value="">srghnx</option>
      </select>
    </div>
    <div className="flex justify-between -mb-10 w-[102%] ">
      <div className="border-2 rounded-full text-sm bg-white px-4 pt-0.5 -mr-4 "> تاریخ ثبت {'1402/01/23'} </div>
      <div className="">
        <button className='btn-r w-5 rounded-full box-content	 border-2 mx-1'>×</button>
        <button className='btn-g w-5 rounded-full box-content	 border-2'>✓</button>
      </div>
    </div>
  </div>
</div>
)}
export default O_LightClock
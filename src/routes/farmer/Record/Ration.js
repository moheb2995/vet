import React,{ useState, useEffect } from 'react'

const Ration = () => {
  const [show, setshow] = useState(false)


return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> جیره </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1">
      <div className="w-full">
        <div className="center ">
          <table className=''>
            <thead>
              <tr className="">
                <th className="th_Ration"> نوع جیره </th>
                <th className="th_Ration"> مقدار </th>
                <th className="th_Ration"> واحد </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="t_Ration">
                  <select >

                  </select>
                </td>
                <td className="t_Ration"></td>
                <td className="t_Ration">
                  <select >

                  </select>
                </td>
              </tr>
            </tbody>
            <tfoot className='text-center '>
                <td></td>
                <td><button className='text-4xl px-2'>+</button></td>
            </tfoot>
          </table>
        </div>

        <div className="flex justify-end w-full mt-4">
          <button className='btn-r mx-2'>انصراف</button>
          <button className='btn-g'>ثبت</button>
        </div>
      </div>
    </div>
  </div>
</div>
)}
export default Ration
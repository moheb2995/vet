import React, { useState ,useEffect } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import R_BeakV from './OffersRecord/R_BeakV'
import R_VaccinationV from './OffersRecord/R_VaccinationV'
import R_LightClockV from './OffersRecord/R_LightClockV'

const OffersV = () => {
  const [show,setshow] = useState(false)
  const [file, setfile] = useState('')
  const location = useLocation().pathname
  const params = useParams()
  const param = `/NavV/HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}/OffersV`

return (
<>
  <div className='flex gap-10'>
    <nav className='border flex flex-col p-2 px-6 shadow-xl rounded-3xl text-center h-min'>
      <NavLink to={'O_VaccinationV'} className={({isActive}) => isActive? 'active':'not_active'}> واکسیناسیون </NavLink> <hr />
      <NavLink to={'O_RationV'} className={({isActive}) => isActive? 'active':'not_active'}> جیره </NavLink> <hr />
      <NavLink to={'O_LightClockV'} className={({isActive}) => isActive? 'active':'not_active '}> ساعات روشنایی </NavLink> <hr />
      <NavLink to={'O_BeakV'} className={({isActive}) => isActive? 'active':'not_active'}> نوک چینی </NavLink> <hr />
      <NavLink to={'O_prescriptionV'} className={({isActive}) => isActive? 'active':'not_active'}> نسخه </NavLink> 
    </nav>

    <div className="w-full ">
      <div className="flex justify-end mb-4">
        <button className='active w-auto p-2 px-5 shadow-md' onClick={()=> setshow(true)}> ارسال پیشنهاد </button>
      </div>
      <Outlet/>
    </div>

  </div>
  {/* moduls */}
  {
    show ?
    <>    
    <div onClick={()=> setshow(false)} className="backdrop"></div>
    <div className="center ">
      <div className="z-40 bg-white rounded-xl p-11 px-16 fixed top-[20%] "> 
        {/* واکسیناسیون */}
        <R_VaccinationV/>
        {/* جیره */}
        <table className={location == `${param}/O_RationV`?'':'hidden'}>
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
              <td className="t_Ration">
                <input className='w-full ' type="number" />
              </td>
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
        {/* ساعات روشنایی */}
        <R_LightClockV setshow={setshow}/>
        {/* نوک چینی */}
        <R_BeakV/>
        {/* نسخه */}
        <div className={location == `${param}/O_prescriptionV`?'':'hidden'}>
          <input className='hidden' type="file" id='O_prescriptionV' accept='image/*' onChange={e=>setfile(e.target.files[0])} />
          <div className="border-2 border-dashed center items-center m-6 my-3">
            <label className='inline-flex text-4xl p-4 px-8 ' htmlFor="O_prescriptionV"> انتخاب فایل</label>
          </div>
          <h6 className="mx-6 ">{file.name} </h6>
        </div>
        {/*  */}
      </div>
    </div>
    </>
    : ''
  }
</>
)}
export default OffersV
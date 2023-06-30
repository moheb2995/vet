import React, { useState ,useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const R_RationV = () => {
  // const [file, setfile] = useState('')
  const location = useLocation().pathname
  const params = useParams()
  const param = `/NavV/HomePageV/${params.id}/userId/${params.userId}/salonId/${params.salonId}/EpochId/${params.EpochId}/OffersV`


return (
<div className={location == `${param}/O_RationV`?'':'hidden'}>
  <table className={location == `${param}/O_RationV`?'':'hidden'}>
    <thead>
      <tr className="">
        <th className="th_Ration"> نوع جیره </th>
        <th className="th_Ration"> مقدار (kg)</th>
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
      </tr>
    </tbody>
  </table>
  <div className="center"><button className='text-4xl px-2'>+</button></div>
</div>
)}
export default R_RationV
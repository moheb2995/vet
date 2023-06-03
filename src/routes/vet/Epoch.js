import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Fetch from '../../components/Fetch'

const Epoch = () => {
  const [data,setdata] = useState([])
  const navigate =useNavigate()
  const id = useParams().salonId
console.log('salonId',id);

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/?salon_id=${id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[])

return (
<div className='center'>
  <div className="w-96 min-h-[90vh] ">
    {
      data.length === 0 ? '':
      data.map(i => <Link key={i.id} to={`EpochId/${i.id}/OffersV`} className={i.end_date === null?'card2':"card2 opacity-70" }>
      <div>
        <h5 className="mb-1"> تاریخ آغاز دوره : </h5>
        <h5 className="mb-1"> تاریخ پایان دوره : </h5>
        <h5 className=""> نوع مرغ : </h5>
      </div>
      <div>
        <h5 className="mb-1">{i.start_date} </h5>
        <h5 className="mb-1">{i.end_date?'i.end_date':'در حال پرورش'} </h5>
        <h5 className="">{i.hen_type} </h5>
      </div>
    </Link>
    )}
  </div>
</div>
)}
export default Epoch
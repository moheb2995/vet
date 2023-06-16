import React, { useState, useEffect, useContext } from 'react'
import { myContext } from '../../../context'
import { useParams, useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import InfoSalon from './InfoSalon'
import CreateSalon from './CreateSalon'

const Salon = () => {
  const [show,setshow] = useState(false)
  const [show2,setshow2] = useState(false)
  const [data,setdata] = useState([])
  const [EpochId,setEpochId] = useState('')
  const [update,setupdate] = useState(false)
  const navigate =useNavigate()
  const params = useParams().id
  const _id = useParams().SalonId

  useEffect(()=>{
    setupdate(!update)
  },[])

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/?salon_id=${_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[update])
  
return (
<div className="">
  <div className=' flex'>
    <div className="border-l border-slate-400 w-96 min-h-[90vh] ">
      <button className='text-slate-500 bold border-[1.5px] border-slate-500 p-2 px-6 mb-1 italic rounded 'onClick={()=> setshow(true)}> افزودن دوره پرورش </button> <br />
      {
        data.length === 0 ? '':
        data.map(i => <button key={i.id}
        className={i.is_active?'card2':"card2 opacity-70" }
        onClick={()=>{setshow2(true);setEpochId(i.id)}}>
        <div>
          <h5 className="mb-1"> تاریخ آغاز دوره : </h5>
          <h5 className="mb-1"> تاریخ پایان دوره : </h5>
          <h5 className=""> نوع مرغ : </h5>
        </div>
        <div>
          <h5 className="mb-1">{i.start_date} </h5>
          <h5 className="mb-1">{i.is_active?' در حال پرورش ':' اتمام دوره '} </h5>
          <h5 className="">{i.hen_type} </h5>
        </div>
      </button>
      )}
    </div>

  </div>
  {/* modul 1*/}
  {show ? <CreateSalon id={params} setshow={setshow}/> : ''}
  {/* modul 2*/}
  { show2 ? <InfoSalon EpochId={EpochId} setshow2={setshow2}/>: ''}
</div>
)}
export default Salon
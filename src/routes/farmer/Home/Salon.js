import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import InfoSalon from './InfoSalon'
import CreateSalon from './CreateSalon'
import Cookies from "universal-cookie";

const Salon = () => {
  const [show,setshow] = useState(false)
  const [show2,setshow2] = useState(false)
  const [data,setdata] = useState([])
  const [id,setid] = useState('')
  const [start_date,setstart_date] = useState('')
  const [update,setupdate] = useState(false)
  const cookies = new Cookies()
  const navigate =useNavigate()
  const useparams = useParams()
  const params = useparams.id.slice(1)

  useEffect(()=>{
    setupdate(!update)
  },[])

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/?salon_id=${params}`
    Fetch(body,token,setdata,method,api,navigate)
  },[update])
  // console.log(data);
  
return (
<div className="">
  <div className=' flex'>
    <div className="border-l w-96 min-h-[90vh] ">
      <Link to={'/NavF/HomePage'}><button className='text-red-600 italic mb-6 text-lg '> سالن شماره 1 {'>'} </button></Link> <br />
      <button className='text-[#48e848] bold border-[1.5px] border-[#26e626] p-2 px-6 mb-1 italic rounded 'onClick={()=> setshow(true)}> افزودن دوره پرورش </button> <br />
      {
        data.length === 0 ? '':
        data.map(i => <button key={i.id}
        className={i.end_date === null?'card2':"card2 opacity-70" }
        onClick={()=>{cookies.set('epoch_id',i.id); cookies.set('start_date',i.start_date); setshow2(true)}}>
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
      </button>
      )}
    </div>

  </div>
  {/* modul 1*/}
  {show ? <CreateSalon id={params} setshow={setshow}/> : ''}
  {/* modul 2*/}
  { show2 ? <InfoSalon setshow2={setshow2}/>: ''}
</div>
)}
export default Salon
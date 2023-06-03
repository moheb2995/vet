import React, { useState, useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import { useNavigate, Link, useParams } from 'react-router-dom'
import Cookies from "universal-cookie";

const InfoSalon = ({setshow2, EpochId }) => {
  const [data,setdata] = useState('')
  const [update,setupdate] = useState(false)
  const cookies = new Cookies()
  const epoch_id = cookies.get('epoch_id')
  const navigate =useNavigate()
  const params = useParams()
  const param = `EpochId/${EpochId}`
  useEffect(()=>{
    setupdate(!update)
  },[])

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/epochs/detail/?epoch_id=${epoch_id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[update])

  function ok(){
    if(window.confirm(' آیا از این کار اطمینان دارید این عمل غیر قابل بازگشت است')){alert('ok')}
  }

return (
<>
<div onClick={()=> setshow2(false)} className="backdrop"></div>
  <div className="center ">
    <div className="z-40 bg-white rounded-xl p-8 px-14 fixed top-[10vh] ">
      <h1 className="text-3xl mx-28 mb-8 "> مشخصات سالن و دوره پرورش </h1>
      <div className="center gap-40">
        <div className="">
          <h4 className="mt-2"> نام سالن :</h4>
          <h4 className="mt-2"> نژاد گله :</h4>
          <h4 className="mt-2"> نام گله مادر :</h4>
          <h4 className="mt-2"> نوع مرغ :</h4>
          <h4 className="mt-2"> تعداد کل پرنده :</h4>
          <h4 className="mt-2"> سن گله :</h4>
          <h4 className="mt-2"> مکان سالن :</h4>
        </div>
        <div dir='ltr' className="">
          <p className="mt-2">fgf</p>
          <p className="mt-2">htrh</p>
          <p className="mt-2">{data.parent_herd_name} </p>
          <p className="mt-2">{data.hen_type}</p>
          <p className="mt-2">{data.current_hen_count} </p>
          <p className="mt-2">{data.herd_age} </p>
          <p className="mt-2">tfhf</p>
        </div>
      </div>
      <div className="flex justify-center mt-7 ">
        <Link className=' mx-4 bold underline underline-offset-8 text-black' to={`${param}/View`}> نمایش اطلاعات </Link>
        <Link className=' mx-4 bold underline underline-offset-8 text-black' to={`${param}/Record`}> اطلاعات ثبت </Link>
        <Link className=' mx-4 bold underline underline-offset-8 text-black' to={`${param}/NavO`}> پیشنهادات </Link>
        <button onClick={ok} className='mx-4 bold underline underline-offset-8 text-black'> اتمام دوره پرورش </button>
      </div>
    </div>
  </div>
</>
)}
export default InfoSalon
import React, { useState,useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import { useNavigate, Link } from "react-router-dom";

const HomePage = () => {
  const [show,setshow] = useState(false)
  const [name,setname] = useState('')
  const [location,setlocation] = useState('')
  const [data,setdata] = useState([])
  const [update,setupdate] = useState(false)
  const navigate =useNavigate()

  // if(data.code === "token_not_valid"){
    // setupdate(!update)
  // }

  // useEffect(()=>{
    // setupdate(!update)
  // },[])

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/salons/${'?farmer_id=e884e1ca-56de-43b0-a44a-015bca594290'}`
    Fetch(body,token,setdata,method,api,navigate)
  },[update])

  const addSalon=async()=>{
    const body = { name, location, 'farmer': "eae7fc03-3907-4cd9-8194-15b0e8e25532" }
    const token = true
    const method = 'POST'
    const api = '/api/v1/salons/create/'
    // if(name && location ){
      Fetch(body,token,setdata,method,api,navigate)
    // }
  }
  
  if(data.length === 0)return <h1>loading...</h1>
return (
<div className="">
  <div className=' flex'>
    <div className="border-l w-96 min-h-[90vh] ">
      <button className='text-[#142aec] bold border-[1.5px] border-[#3849e0] p-2 px-6 mb-1 italic rounded 'onClick={()=> setshow(true)}> افزودن سالن </button>
      {
        data.length > 0?
        data.map(i =><Link key={i.id} to={`Salon/:${i.id}`}><h4 className="border w-ful rounded-lg p-1 px-4 ml-5 mt-4">{i.name} </h4></Link>)
        :''
      }
    </div>
  </div>
  {/* modul */}
  {
    show ?
    <>    
    <div onClick={()=> setshow(false)} className="backdrop"></div>
    <div className="center ">
      <div className="z-40 bg-white rounded-xl p-8 px-14 fixed top-[30vh] ">
        <div className="flex justify-between w-full gap-7 ">
          <div className="">
            <h4 className=""> نام سالن </h4>
            <h4 className="mt-5"> مکان سالن </h4>
          </div>
          <div className="">
            <input className="" value={name} onChange={e => setname(e.target.value)} /> <br/>
            <input className="mt-5" value={location} onChange={e => setlocation(e.target.value)} />
          </div>
        </div>
        <div className="flex justify-end mt-10 ">
          <button className='btn-r mx-2'>انصراف</button>
          <button className='btn-g' onClick={addSalon}>ثبت</button>
        </div>
      </div>
    </div>
    </>
    : ''
  }
</div>
)}
export default HomePage
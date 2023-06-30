import React, { useState,useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import { useNavigate, Link, useParams } from "react-router-dom";

const HomePage = () => {
  const [show,setshow] = useState(false)
  const [name,setname] = useState('')
  const [location,setlocation] = useState('')
  const [data,setdata] = useState([])
  const [update,setupdate] = useState(false)
  const [add,setadd] = useState(0)
  const navigate =useNavigate()
  const id = useParams().id
  console.log(id);

  useEffect(()=>{
    const body=undefined
    const token=true
    const method='GET'
    const api=`/api/v1/salons/?farmer_id=${id}`
    Fetch(body,token,setdata,method,api,navigate)
  },[update,add])

  const addSalon=async()=>{
    const body = { name, location, farmer: id }
    const token = true
    const method = 'POST'
    const api = '/api/v1/salons/create/'
    Fetch(body,token,setdata,method,api,navigate)
    setshow(false);setname('');setlocation('');setadd(add+1)
    setTimeout(() => {
      setupdate(add + 1)
      console.log(add);
    }, 1000);
  }
  
  if(data.length === 0)return <h1>loading...</h1>
return (
<div className="">
  <div className=' flex'>
    <div className="border-l border-slate-400 w-96 min-h-[90vh] ">
      <button className='text-slate-500 bold border-[1.5px] border-slate-500 p-2 px-6 mb-1 italic rounded 'onClick={()=> setshow(true)}> افزودن سالن </button>
      {
        data.length > 0?
        data.map(i =><Link key={i.id} to={`SalonID/${i.id}`} >
          <div className="rounded-lg p-4 px-7 ml-5 mt-4 grid grid-cols-2 text-center gap-2 bg-slate-200" >
            <h4 className=""> نام سالن:</h4>
            <h4 className=""> {i.name} </h4>
            <h4 className="">مکان سالن:</h4>
            <h4 className="">{i.location} </h4>
          </div>
        </Link>)
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
          <button className='btn-r mx-2'onClick={()=>{setshow(false);setname('');setlocation('')}}>انصراف</button>
          <button className={name&&location?'btn-g':'btn-g opacity-60'} onClick={addSalon} disabled={name&&location?false:true} >ثبت</button>
        </div>
      </div>
    </div>
    </>
    : ''
  }
</div>
)}
export default HomePage
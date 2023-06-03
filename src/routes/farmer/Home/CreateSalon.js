import React, { useState, useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import { useNavigate } from 'react-router-dom'

const CreateSalon = ({setshow, id}) => {
  const [date,setdate] = useState('2023-6-2')
  const [type,settype] = useState('LAYING')
  const [race,setrace] = useState('something')
  const [age,setage] = useState('')
  const [name,setname] = useState('somthing')

  const [started,setstarted] = useState(null)
  const [firstNum,setfirstNum] = useState('950000')
  const [lastNum,setlastNum] = useState('950000')

  const [data,setdata] = useState([])
  const navigate =useNavigate()

  const create =async ()=>{
    const body = started ? {
      salon:id,
      hen_type:type,
      herd_breed:race,
      // age:age, //number
      parent_herd_name:name,
      initial_hen_count:firstNum ,
      start_date:date, // 2023-4-2
    } : {
      salon:id,
      hen_type:type,
      herd_breed:race,
      // age:age, //number
      parent_herd_name:name,
      initial_hen_count:firstNum,
      start_date:date, // 2023-4-2
      herd_birth_date:date, // 2023-4-2
      current_hen_count:lastNum,
    }
    const token=true
    const method='POST'
    const api=`/api/v1/epochs/create/`
    Fetch(body,token,setdata,method,api,navigate)
  }

return (
<>
<div onClick={()=> setshow(false)} className="backdrop"></div>
  <div className="center ">
    <div className="z-40 bg-white rounded-xl p-8 px-14 fixed top-[9vh] ">
      <div className="flex justify-between w-full gap-7 ">
        <div className="w-20">
          <h4 className="mt-1"> نوع مرغ </h4>
          <h4 className="mt-8"> نژاد گله </h4>
          <h4 className="mt-7"> سن گله </h4>
          <h4 className="mt-7"> نام گله مادر </h4>
        </div>
        <div className="">
          <input className="" value={type} onChange={e => settype(e.target.value)} /> <br/>
          <input className="mt-5" value={race} onChange={e => setrace(e.target.value)} /> <br/>
          <input className="mt-5" value={age} onChange={e => setage(e.target.value)} type='number' /> <br/>
          <input className="mt-5" value={name} onChange={e => setname(e.target.value)} /> <br/>
        </div>
      </div>

      <div className="flex mt-5">
        <h5 className=""> آیا پرورش سالن را از امروز شروع کرده اید ؟ </h5>
        <label htmlFor='1' className='mr-4' >بله</label>
        <input id='1' type="checkbox" value={true} onChange={e => setstarted(e.target.defaultValue)}/>

        <label htmlFor='2' className='mr-4' >خیر</label>
        <input id='2' type="checkbox" value={false} onChange={e => setstarted(e.target.defaultValue)}/>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div className="">
          <h5 className="inline-block ">  تاریخ شروع پرورش : </h5><br />
          <h5 className="inline-block my-4 ">تعداد کل پرنده در روز اول: </h5><br />
          <h5 className="inline-block ">تعداد کل پرنده در حال حاضر:</h5><br />
        </div>
        <div className="">
          <input className='w-28 my-0.5 ' value={date} onChange={e => setdate(e.target.value)} /> <br />
          <input className='w-28 my-0.5 ' type="number" value={firstNum} onChange={e => setfirstNum(e.target.value)} /> <br />
          <input className='w-28 my-0.5 ' type="number" value={lastNum} onChange={e => setlastNum(e.target.value)} /> <br />
        </div>
      </div>

      <div className="flex justify-end mt-10 ">
        <button className='btn-r mx-2'>انصراف</button>
        <button className='btn-g' onClick={create}>ثبت</button>
      </div>
    </div>
  </div>
</>
)}
export default CreateSalon
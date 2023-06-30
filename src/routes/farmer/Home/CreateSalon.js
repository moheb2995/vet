import React, { useState, useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import DatePickerF from '../../../components/DatePickerF'
import { useNavigate } from 'react-router-dom'

const CreateSalon = ({ setshow, id, setadd, add }) => {
  const [date,setdate] = useState('')
  const [value,setvalue] = useState('')
  const [type,settype] = useState('LAYING')
  const [race,setrace] = useState('something')
  const [name,setname] = useState('somthing')

  const [started,setstarted] = useState()
  const [firstNum,setfirstNum] = useState('1000000')
  const [lastNum,setlastNum] = useState('950000')

  const [data,setdata] = useState([])
  const navigate =useNavigate()


  const create =async ()=>{
    const body = {
      salon:id,
      hen_type:type,
      herd_breed:race,
      parent_herd_name:name,
      initial_hen_count:firstNum,
      start_date:date, // 2023-4-2
      herd_birth_date:date, // 2023-4-2
      current_hen_count:lastNum,
    }
    const token=true
    const method='POST'
    const api=`/api/v1/epochs/create/`
    if(date&&type&&race&&name&&firstNum&&lastNum){
      Fetch(body,token,setdata,method,api,navigate)
      setshow(false);setadd(add+1)
      setTimeout(() => {
        setadd(add+10)
      }, 1000);
    }
  }

return (
<>
<div onClick={()=> setshow(false)} className="backdrop"></div>
  <div className="center ">
    <div className="z-40 bg-white rounded-xl p-8 px-14 fixed top-[9vh] ">
      <div className="flex justify-between w-full gap-7 items-center ">
        <div className="w-20">
          <h4 className="mt-1"> نوع مرغ </h4>
          <h4 className="my-5"> نژاد گله </h4>
          <h4 className=""> نام گله مادر </h4>
        </div>
        <div>
          <select className="" onChange={e => settype(e.target.value)}> 
            <option value="LAYING">مرغ تخمگذار </option>
            <option value="BROILER">مرغ گوشتی </option>
          </select><br />
          <input className="my-3" value={race} onChange={e => setrace(e.target.value)} /> <br/>
          <input className="" value={name} onChange={e => setname(e.target.value)} /> <br/>
        </div>
      </div>
      <div className="flex mt-5">
        <h5 className=""> آیا پرورش سالن را از امروز شروع کرده اید ؟ </h5>
        <label htmlFor='1' className='mr-4' >بله</label>
        <input id='1' type="radio" value={true} onChange={e => setstarted(e.target.defaultValue)} checked={started == 'true'} />

        <label htmlFor='2' className='mr-4' >خیر</label>
        <input id='2' type="radio" value={false} onChange={e => setstarted(e.target.defaultValue)} checked={started == 'false'}/>
      </div>
      <div className={started?"mt-8 flex justify-between items-center":'hidden'}>
        <div className=" ">
          <h5 className={started == 'true'?"":''}>  تاریخ شروع پرورش : </h5>
          <h5 className={started == 'true'?"mt-5":'hidden'}>تعداد کل پرنده در روز اول: </h5>
          <h5 className="inline-block mt-5">تعداد کل پرنده در حال حاضر:</h5>
        </div>
        <div className="-ml-2">
          <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
          <input className={started == 'true'?"mt-3 mx-2 block ":'hidden'} type="number" value={firstNum} onChange={e => setfirstNum(e.target.value)} /> 
          <input className='my-0.5 block mx-2 mt-3' type="number" value={lastNum} onChange={e => setlastNum(e.target.value)} /> 
        </div>
      </div>

      <div className="flex justify-end mt-10 ">
        <button className='btn-r mx-2' onClick={()=>{setdate('');settype('');setrace('');setname('');setfirstNum('');setlastNum('');setshow(false)}}>انصراف</button>
        <button 
          className={date&&type&&race&&name&&firstNum&&lastNum?'btn-g':'btn-g opacity-60'}
          onClick={create} 
          disabled={date&&type&&race&&name&&firstNum&&lastNum?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</>
)}
export default CreateSalon
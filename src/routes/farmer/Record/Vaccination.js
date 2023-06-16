import React,{ useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import DatePickerF from '../../../components/DatePickerF';
import DatePicker from 'react-multi-date-picker';

const Vaccination = () => {
  const [date,setdate] = useState('')
  const [value,setvalue] = useState('')
  const [age, setage] = useState('')
  const [use, setuse] = useState('EYE_DROP')
  const [name, setname] = useState('NEWCASTLE')
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')

  const navigate =useNavigate()
  const epoch_id = useParams().EpochId

  console.log(date);
  useEffect(()=>{
    HerdAge(setherd_age)
  },[])
  console.log(value);
  console.log(date);
  
  const save =async()=>{
    const body={ epoch_id, herd_age, date, name, how_to_use: use}
    const token=true
    const method='POST'
    const api=`/api/v1/vaccination/`
    Fetch(body,token,setdata,method,api,navigate)
  }
  
return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> واکسیناسیون </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1">
      <div className="grid grid-cols-4 text-center gap-4">
        <h5 className="-m-2">نام واکسن</h5>
        <h5 className="-m-2">طریقه مصرف</h5>
        <h5 className="-m-2">سن</h5>
        <h5 className="-m-2">تاریخ</h5>
        <select onChange={e=>setname(e.target.value)}>
          <option value="NEWCASTLE"> نیوکاسل </option>
        </select>
        <select onChange={e=>setuse(e.target.value)}>
          <option value="EYE_DROP"> قطره چشم </option>
        </select>
        <input className='' value={age} onChange={e => setage(e.target.value)} />
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
      </div>
      <div className="flex mr-2">
        <button className='btn-r ml-2'>انصراف</button>
        <button className='btn-g' onClick={save}>ثبت</button>
      </div>
    </div>
  </div>
</div>)}
export default Vaccination
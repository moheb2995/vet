import React,{ useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import DatePickerF from '../../../components/DatePickerF';

const Vaccination = () => {
  const [date,setdate] = useState('')
  const [value,setvalue] = useState('')
  const [age, setage] = useState('')
  const [use, setuse] = useState('EYE_DROP')
  const [name, setname] = useState('NEWCASTLE')
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`
  
  const navigate =useNavigate()
  const epoch_id = useParams().EpochId

  useEffect(()=>{
    HerdAge(setherd_age)
  },[])
  
  const save =async()=>{
    const body={ epoch_id, herd_age, date, name, how_to_use: use}
    const token=true
    const method='POST'
    const api=`/api/v1/vaccination/`
    Fetch(body,token,setdata,method,api,navigate)
    putOff()
  }

  function putOff(){
    setvalue('');
    setdate('')
    setage('')
    setuse('')
    setname('')
  }
  
return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> واکسیناسیون </button>
  <div className={show?"flex ":'hidden'}>
  <div className="btn-b"><Link className='flex items-center' to={`${param}/V_VaccinationV`}> مشاهده تاریخچه </Link></div>
    <div className="card1">
      <div className="grid grid-cols-4 text-center gap-4">
        <h5 className="-m-2">نام واکسن</h5>
        <h5 className="-m-2">طریقه مصرف</h5>
        <h5 className="-m-2">سن</h5>
        <h5 className="-m-2">تاریخ</h5>
        <select onChange={e=>setname(e.target.value)}>
        <option value="">  </option>
        <option value="NEWCASTLE"> نیوکاسل </option>
        </select>
        <select onChange={e=>setuse(e.target.value)}>
        <option value="">  </option>
          <option value="EYE_DROP"> قطره چشم </option>
        </select>
        <input className='' value={age} onChange={e => setage(e.target.value)} />
        <DatePickerF setdate={setdate} value={value} setvalue={setvalue} />
      </div>
      <div className="flex mr-2">
        <button className='btn-r ml-2' onClick={putOff}>انصراف</button>
        <button className={value&&age&&name&&use?'btn-g':'btn-g opacity-60'} onClick={save} disabled={value&&age&&name&&use?false:true} >ثبت</button>
      </div>
    </div>
  </div>
</div>)}
export default Vaccination
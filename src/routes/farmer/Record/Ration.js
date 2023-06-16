import React,{ useState, useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import { useParams, useNavigate } from 'react-router-dom'

const Ration = () => {
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const [date, setdate] = useState('')
  const [value,setvalue] = useState('')
  const [herd_age, setherd_age] = useState('')
  const [amount,setamount] = useState({
    "SOYBEAN_MEAL": '',
    "SUNFLOWER_MEAL": '',
    "MILO": '',
    "LYSINE": '',
    "PEANUT_MEAL": ''
  })

  const EpochId = useParams().EpochId
  const navigate =useNavigate()

  useEffect(()=>{
    HerdAge(setherd_age)
  },[])

  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, date, }
    const token=true
    const method='POST'
    const api=`/api/v1/lighting/`
    Fetch(body,token,setdata,method,api,navigate)
  }

  function putOff(){
    setvalue('');
    setdate('')
    setshow(false)
    setamount({})
    // settype([])
  }

  function push(){

  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> جیره </button>
  <div className={show?"flex ":'hidden'}>
    <div className="btn-b"><button > مشاهده تاریخچه </button></div>
    <div className="card1">
      <div className="w-full">
        <div className="center ">
          <table className=''>
            <thead>
              <tr className="">
                <th className="th_Ration"> نوع جیره </th>
                <th className="th_Ration"> مقدار (kg)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="t_Ration">
                  <select >
                    <option value="SOYBEAN_MEAL">کنجاله سویا</option>
                    <option value="SUNFLOWER_MEAL">کنجاله آفتابگردان</option>
                    <option value="MILO">ذرت خوشه ای</option>
                    <option value="LYSINE">لیزین</option>
                    <option value="PEANUT_MEAL">کنجاله بادام زمینی</option>
                  </select>
                </td>
                <td className="t_Ration">
                  <input className='w-full ' type="number" />
                </td>
              </tr>
            </tbody>
          </table> 
        </div>
        <div className="center"><button className='text-4xl px-2 text-center ' onClick={push}>+</button></div>

        <div className="flex justify-end w-full mt-4">
          <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
          <button className='btn-g' onClick={save}>ثبت</button>
        </div>
      </div>
    </div>
  </div>
</div>
)}
export default Ration
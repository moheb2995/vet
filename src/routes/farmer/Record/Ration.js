import React,{ useState, useEffect } from 'react'
import Fetch from '../../../components/Fetch'
import HerdAge from '../../../components/HerdAge';
import { useParams, useNavigate, Link } from 'react-router-dom'

const Ration = () => {
  const [show, setshow] = useState(false)
  const [data,setdata] = useState([])
  const [herd_age, setherd_age] = useState('')
  const [update,setupdate] = useState(false)
  const [amount,setamount] = useState([{type:'', amount:''}])
  const EpochId = useParams().EpochId
  const navigate =useNavigate()
  const params = useParams()
  const param = `/NavF/HomePage/${params.id}/SalonId/${params.SalonId}/EpochId/${params.EpochId}/View`
  
  useEffect(()=>{
    HerdAge(setherd_age)
  },[])

  const save =async()=>{
    const body={ epoch_id:EpochId, herd_age, }
    const token=true
    const method='POST'
    const api=`/api/v1/ration/`
    Fetch(body,token,setdata,method,api,navigate)
  }

  function putOff(){
    setamount([{type:'', amount:''}])
  }

  const plus =()=> {
    amount.push({type:'', amount:''})
    setupdate(!update)
  }

return (
<div className='mb-6'>
  <button onClick={()=> setshow(!show)} className='btn'> جیره </button>
  <div className={show?"flex ":'hidden'}>
  <div className="btn-b"><Link className='flex items-center' to={`${param}/V_RationV`}> مشاهده تاریخچه </Link></div>
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
              {amount.map((i,inx)=>
                <tr key={inx} className="">
                  <td className="t_Ration">
                    <select onChange={e=> {i.type = e.target.value; setamount(amount); setupdate(!update) }}>
                    <option value=""></option>
                    <option value="SOYBEAN_MEAL">کنجاله سویا</option>
                      <option value="SUNFLOWER_MEAL">کنجاله آفتابگردان</option>
                      <option value="MILO">ذرت خوشه ای</option>
                      <option value="LYSINE">لیزین</option>
                      <option value="PEANUT_MEAL">کنجاله بادام زمینی</option>
                    </select>
                  </td>
                  <td className="t_Ration">
                    <input className='w-full ' value={i.amount} onChange={e=> {i.amount = e.target.value; setamount(amount); setupdate(!update)}} type="number" />
                  </td>
                </tr>
              )}
            </tbody>
          </table> 
        </div>
        <div className="center"><button className='text-4xl px-2 text-center ' onClick={plus}>+</button></div>

        <div className="flex justify-end w-full mt-4">
          <button className='btn-r mx-2' onClick={putOff}>انصراف</button>
          <button className={amount[0].amount&&amount[0].type?'btn-g':'btn-g opacity-60'} onClick={save} disabled={amount[0].amount&&amount[0].type?false:true} >ثبت</button>
        </div>
      </div>
    </div>
  </div>
</div>
)}
export default Ration
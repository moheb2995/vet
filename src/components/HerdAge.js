import Cookies from "universal-cookie";

const HerdAge = (setherd_age) => {
  const cookies = new Cookies()
  const id = cookies.get('epoch_id')
  const startDate = cookies.get('start_date')
  const access = cookies.get('access')
  
  fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/epochs/herd-age/?epoch_id=${id}&date=${startDate}`,{
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access}`
    }
  })
  .then(res=>res.json())
  .then(data=>setherd_age(data.herd_age))
}
export default HerdAge
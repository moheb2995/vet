import React from 'react'
import LightClock from './LightClock'
import Loss from './Loss'
import NumberEgg from './NumberEgg'
import Ration from './Ration'
import Seed from './Seed'
import Vaccination from './Vaccination'
import Weight from './Weight'
import WeightEgg from './WeightEgg'
import Beak from './Beak'

const Record = () => {

return (
<div className=''>
  <Loss />
  <Vaccination />

  <div className="">
    <NumberEgg />
    <WeightEgg />
  </div>

  <Weight />
  <Seed />
  <Ration />
  <LightClock />
  <Beak />
</div>
)}
export default Record
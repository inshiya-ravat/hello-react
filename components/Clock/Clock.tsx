import React, { useEffect, useState } from 'react'
import './Clock.css'

const Clock = () => {
  const [hourDegree, setHourDegree] = useState(0);
  const [minuteDegree, setMinuteDegree] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setHourDegree(hourDegree+30)
      setMinuteDegree(minuteDegree+6)
    },1000)
  },[hourDegree,minuteDegree])
  return (
    <div className='clock-border'>
      <div className='clock-main'>
          <div className='dot'>
            <div className='hour-hand' style={{transform:`rotate(${hourDegree}deg)`}}></div>
            <div className='minute-hand' style={{transform:`rotate(${minuteDegree}deg)`}}></div>
          </div>
      </div>
    </div>
  )
}

export default Clock

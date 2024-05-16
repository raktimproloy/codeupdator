'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Interest() {
  const profileData = useSelector((state:any) => state.profile)
  const [interestData, setInterestData] = useState([])
  useEffect(() => {
    if(Object.keys(profileData).length > 0){
      setInterestData(JSON.parse(profileData.interest))
    }
  }, [])
  return (
    <div className="flex space-x-1">
      {
        interestData && interestData.length > 0 && interestData.map(item => 
          <span className="indicator-item indicator-top indicator-start badge badge-success text-white rounded" style={{background: item.background, color: item.color}} key={item.value}>{item.label}</span>
        )
      }

        {/* <span className="indicator-item indicator-top indicator-start badge badge-success text-white rounded">Node js</span>
        <span className="indicator-item indicator-top indicator-center badge badge-secondary rounded">PHP</span>
        <span className="indicator-item indicator-top indicator-end badge badge-accent text-white rounded">Vue Js</span>
        <span className="indicator-item indicator-middle indicator-start badge badge-neutral rounded">Laravel</span>
        <span className="indicator-item indicator-middle indicator-center badge badge-warning rounded">HTML</span> */}
    </div>
  )
}

export default Interest
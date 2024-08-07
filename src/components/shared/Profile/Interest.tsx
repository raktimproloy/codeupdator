'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Interest() {
  const profileData = useSelector((state:any) => state.profile)
  const packageData = useSelector((state:any) => state.package)
  const [interestData, setInterestData] = useState([])

  useEffect(() => {
    if(Object.keys(profileData).length > 0){
      const profileInterests = JSON.parse(profileData.interest)
      const interests = profileInterests.map(id => {
        const packageItem = packageData.find(pkg => pkg.id === parseInt(id))
        if (packageItem) {
          return {
            label: packageItem.title,
            background: packageItem.bg_color,
            color: packageItem.font_color
          }
        }
        return null
      }).filter(item => item !== null)
      setInterestData(interests)
    }
  }, [profileData, packageData])

  return (
    <div className="flex space-x-1">
      {
        interestData && interestData.length > 0 && interestData.map((item, index) => 
          <span className="indicator-item indicator-top indicator-start badge badge-success text-white rounded" style={{background: item.background, color: item.color}} key={index}>{item.label}</span>
        )
      }
    </div>
  )
}

export default Interest

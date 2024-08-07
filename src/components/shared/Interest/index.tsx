'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Index({interest}:any) {
    const packageData = useSelector((state:any) => state.package)
    const [interestData, setInterestData] = useState([])
    const interestParse = JSON.parse(interest)
  
    useEffect(() => {
      if(interestParse.length > 0 && interestData.length === 0){
        const interests = interestParse.map(id => {
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
    }, [interest, packageData])
  
    return (
      <div className="flex space-x-1 mt-3">
        {
          interestData && interestData.length > 0 && interestData.map((item, index) => 
            <span className="indicator-item indicator-top indicator-start badge badge-success text-white rounded" style={{background: item.background, color: item.color}} key={index}>{item.label}</span>
          )
        }
      </div>
    )
}

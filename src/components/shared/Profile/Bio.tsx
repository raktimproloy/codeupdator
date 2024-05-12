import React from 'react'
import Interest from './Interest'
import { useSelector } from 'react-redux'

function Bio() {
  const profileData = useSelector((state:any) => state.profile)

  return (
    <>
        <div className='mb-5'>
            <h1 className='font-bold text-2xl'>Bio:</h1>
            <p>{profileData.bio || ""}</p>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>Interest:</h1>
            <Interest/>
        </div>
    </>
  )
}

export default Bio
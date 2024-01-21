import React from 'react'
import Card1 from "@/components/shared/PostCard/Card1"
import Bio from '@/components/shared/Profile/Bio'
import ProfileInfo from '@/components/shared/Profile/ProfileInfo'

interface PropsData{
    id: string
}

function index({id}: PropsData) {
  return (
    <>
    <div className='max-w-6xl m-auto px-5 mt-[100px]'>
    <div className='grid grid-cols-1 py-5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-10 '>
        <div className='col-span-1 mb-5'>
            <ProfileInfo/>
            <div className='mt-5 mb-5 md:hidden'>
                <Bio/>
            </div>
        </div>
        <div className='col-span-2'>
            <Card1/>
        </div>
        <div className='col-span-1 hidden md:block'>
            <Bio/>
        </div>
    </div>
    </div>
    </>
  )
}

export default index
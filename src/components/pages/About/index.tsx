import React from 'react'
import ListCard from './ListCard'
import ProfileInfo from '@/components/shared/Profile/ProfileInfo'
import Bio from '@/components/shared/Profile/Bio'
import Card1 from "@/components/shared/PostCard/Card1"

function index() {
  return (
    <>
      <div className='py-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='none lg:order-1'></div>
        <div className='sm:h-screen sm:overflow-scroll sm:overflow-x-hidden lg:fixed lg:w-1/3'>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
        </div>
        <div className='hidden shadow rounded p-3 px-4 sm:block sm:h-screen sm:overflow-scroll sm:overflow-x-hidden lg:col-span-2 lg:overflow-auto lg:h-auto lg:order-2'>
          <ProfileInfo/>
          <div className='mt-5 mb-5'>
            <Bio/>
          </div>
          <Card1/>
        </div>
      </div>
    </>
  )
}

export default index
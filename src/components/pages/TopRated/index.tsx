import React from 'react'
import ListCard from './ListCard'
import Filter from './Filter'
import TopRatedPlaceholder from "@/components/shared/Placeholder/TopRatedPlaceholder"

function index() {
  return (
    <>
    <div className='max-w-6xl m-auto px-5 mt-[100px]'>
      <Filter/>
      <div className='grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-3'>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <TopRatedPlaceholder/>
      </div>
      </div>
    </>
  )
}

export default index
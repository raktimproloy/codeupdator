import React from 'react'
import ListCard from './ListCard'
import Filter from './Filter'

function index() {
  return (
    <>
      <Filter/>
      <div className='grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-3'>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
          <ListCard/>
      </div>
    </>
  )
}

export default index
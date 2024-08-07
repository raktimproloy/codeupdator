import React from 'react'
import ListCard from './ListCard'
import Filter from './Filter'
import TopRatedPlaceholder from "@/components/shared/Placeholder/TopRatedPlaceholder"
import { postDataToServer } from '@/utils/fetch/serverSideFetchApi'

async function index() {
  const BASE_MAIN_API = process.env.NEXT_PUBLIC_MAIN_API
  const problems = await postDataToServer(`${BASE_MAIN_API}/user/point/get/1`, {
    limit: 10,
  });
  const userData = problems.data || []
  return (
    <>
    <div className='max-w-6xl m-auto px-5 mt-[100px]'>
      <Filter/>
      <div className='grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 lg:grid-cols-3'>
          {/* {
            userData.length === 0 ? 
            <>
            <TopRatedPlaceholder/>
            <TopRatedPlaceholder/>
            <TopRatedPlaceholder/>
            <TopRatedPlaceholder/>
            
            </>
            : 
            ""
          } */}
          {
            userData && userData.length > 0 && userData.map((user) => 
              <ListCard key={user.id} data={user}/>
            )
          }
          
      </div>
      </div>
    </>
  )
}

export default index
import React from 'react'
import Card1 from "@/components/shared/PostCard/Card1";
import RightSection from "@/components/shared/RightSection/RightSection";
import Image from 'next/image';
import { fetchDataFromServer } from '@/utils/fetch/serverSideFetchApi';

interface PropsData{
  slug: string
}

async function index({slug}: PropsData) {
  const BASE_MAIN_API = process.env.NEXT_PUBLIC_MAIN_API
  const posts = await fetchDataFromServer(`${BASE_MAIN_API}/post-category/get/${slug}`);
  const category = posts.data.category
  const postList = posts.data.posts
  const version = JSON.parse(category.version)
  return (
    <div className="max-w-6xl flex flex-row space-x-5 mx-auto py-5">

    <div className="w-full md:w-4/6">
      <div className="hero h-80 bg-base-200 rounded mb-4">
        <div className="hero-content flex-col lg:flex-row">
          <Image src="/node-js.png" width={500} height={500} alt="category" className='w-40' />
          <div>
            <h1 className="text-5xl font-bold text-center">{category.title || "Default"}</h1>
            <p className="py-6 text-center">{category.details || "Default"}</p>
            <div className='text-center flex items-center justify-between'>
              <div>
                <div className="stat-title text-xl">Interest</div>
                <div className="stat-value">{category.interest_count || 0}</div>
              </div>
              <select className="select select-bordered w-2/4">
                <option disabled >Choose Version</option>
                {
                  version && version.length > 0 && version.map(item => 
                    <option value={item} key={item}>{item}</option>
                  )
                }
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Left Section */}
      {
        postList || postList.length === 0 ?
        <h1 className='text-center'>No Post Available</h1>
        : ""
      }
      {
        postList && postList.length > 0 && postList.map((post:any, index:any) => 
          <Card1 key={post.id} data={post} count={index} />
        )
      }
    </div>

    {/* Right Section */}
    <RightSection/>
  </div>
  )
}

export default index
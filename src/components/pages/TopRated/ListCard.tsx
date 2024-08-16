import Interest from '@/components/shared/Profile/Interest'
import { Location, Email } from '@/store/icons/Icons'
import Link from 'next/link'
import React from 'react'
import DefaultProfileImage from "/public/images/default-profile.png";
import Image from 'next/image';

function ListCard({data}:any) {
  console.log(data)
  return (
    <>
      <div className='shadow rounded p-3'>
        <div className='flex items-center'>
            <div className="avatar">
                <div className="w-20 rounded-full">
                  <Image src={data.profile_image || DefaultProfileImage} alt='' width={50} height={50} />
                </div>
            </div>
            <div className='ml-5'>
                <h1 className='font-bold text-2xl'>{data?.full_name}</h1>
                <Link href='#' className='font-semibold text-gray-500'>@{data?.username}</Link>
                <div className='flex mt-2 items-center text-gray-600'>
                  <Location/>
                  <span className='ml-1'>{data?.location}</span>
                </div>
                <div className='hidden'>
                  <Interest/>
                </div>
            </div>
        </div>
        <div className='mt-3'>
          <p className='mb-3 line-clamp-2'>{data?.bio}</p>
          <Interest/>
        </div>
      </div>
    </>
  )
}

export default ListCard
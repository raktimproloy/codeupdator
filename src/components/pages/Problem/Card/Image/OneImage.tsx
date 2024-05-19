import React from 'react'

export default function OneImage({images}:any) {
  const BASE_UPLOAD_API = process.env.NEXT_PUBLIC_IMAGE_URL
  return (
    <div className="my-5 grid grid-cols-2 gap-3">
        <div className={`col-span-2 group bg-gray-800 text-gray-200 rounded-sm text-4xl text-center overflow-hidden relative`}>
            <img src={`${BASE_UPLOAD_API}${images[0]}`} alt="" className="h-full w-full cursor-pointer" />
        </div>
    </div>
  )
}

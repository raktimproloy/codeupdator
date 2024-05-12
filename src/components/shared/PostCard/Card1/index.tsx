import React from 'react'
import Image from 'next/image'
import styles from "./style.module.css"
import { CommentBox, SavePost, HeartEmpty, ShareBtn, ThreeDotVerticale } from '@/store/icons/Icons'
import AmbientImage from "@/components/shared/AmbientImage"
import DropDown from './DropDown'
import Like from './Like'
import Saved from './Saved'


interface PropsType {
  data: any
  count: number
}


function index({data, count}: PropsType) {
  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL
  const {package_name, version, image, details, id} = data
  const likesData = JSON.parse(data.likes_user_id)
  const savesData = JSON.parse(data.saves_user_id)
  const imageSrc=`${IMAGE_URL}${image}`
  return (
        <div className={`w-fit h-fit shadow rounded p-3 home_news_feed_card my-5 ${styles.card}`}>
          <div className={styles.ambient}>
            <AmbientImage imageSrc={imageSrc} count={count} />
          </div>
        <div className="flex justify-between items-center space-x-5">
            <div className="flex items-center space-x-2">
              <Image
                src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg"
                className="w-9 h-9 rounded-full object-cover" width={500} height={500}
                alt='card'
              />
              <div className="font-semibold flex flex-col  justify-center">
                <span>Getintocode</span>
                <span className="text-xs">19 Nov 2023</span>
              </div>
            </div>
            <DropDown/>
            
        </div>
        <div className="flex flex-col">
        <div dangerouslySetInnerHTML={{ __html: details || '' }} className={`py-2 ${styles.details}`} />
        <div className='text-end'>see more</div>
          <div className="my-5">
          <div className="group bg-gray-800 text-gray-200 rounded-sm text-4xl text-center overflow-hidden relative">
        <Image src={imageSrc} alt="" className="" width={1000} height={1000} />
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white">Your Text Here</span>
        </div>
      </div>

          </div>
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <Like likesData={likesData} id={id} />

              <div className="flex flex-row justify-center items-center space-x-1">
                <div className="w-7 h-7 cursor-pointer" title="Comment">
                  <CommentBox/>
                </div>
                <div className="font-semibold text-sm">1,250</div>
              </div>

              <div className="flex flex-row justify-center items-center space-x-1">
                <div className="w-7 h-7 cursor-pointer" title="Share">
                  <ShareBtn/>
                </div>
                <div className="font-semibold text-sm">1,250</div>
              </div>

            </div>
            <Saved savesData={savesData} id={id}/>

          </div>
        </div>
      </div>
  )
}

export default index
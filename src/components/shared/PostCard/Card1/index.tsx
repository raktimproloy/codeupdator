import React from 'react'
import Image from 'next/image'
import Styles from "./style.module.css"
import { CommentBox, SavePost, HeartEmpty, ShareBtn, ThreeDotVerticale } from '@/store/icons/Icons'
import AmbientImage from "@/components/shared/AmbientImage"
import DropDown from './DropDown'
import { count } from 'console'

interface PropsType {
  count: number
}


function index({count}: PropsType) {
  const imageSrc="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg"
  return (
        <div className={`w-fit h-fit shadow rounded p-3 home_news_feed_card my-5 ${Styles.card}`}>
          <div className={Styles.ambient}>
            <AmbientImage imageSrc={imageSrc} count={count} />
          </div>
        <div className="flex justify-between items-center space-x-5">
            <div className="flex items-center space-x-2">
              <Image
                src={imageSrc}
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
          <div className="py-2">
            Notable Changes
            This release marks the transition of Node.js 20.x into Long Term Support {'('}LTS{')'} with the codename {"'"}Iron{"'"}. The 20.x release line now moves into {"'"}Active LTS{"'"} and will remain so until October 2024. After that time, it will move into Maintenance until end of life in April 2026.

            Known issue
            Collecting code coverage via the NODE_V8_COVERAGE environment variable may lead to a hang. This is not thought to be a regression in Node.js 20 {'('}some reports are on Node.js 18{')'}. For more information, including some potential workarounds, see issue #49344.
          </div>
          <div className="my-5">
          <div className="group bg-gray-800 text-gray-200 rounded-sm text-4xl text-center overflow-hidden relative">
  <img src="https://img.freepik.com/free-photo/abstract-uv-ultraviolet-light-composition_23-2149243966.jpg" alt="" className="" />
  <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-white">Your Text Here</span>
  </div>
</div>

          </div>
          <div className="flex justify-between">
            <div className="flex space-x-6">

              <div className="flex flex-row justify-center items-center space-x-1">
                <div className="w-7 h-7 cursor-pointer" title="Heart">
                  <HeartEmpty/>
                </div>
                <div className="font-semibold text-sm">1,250</div>
              </div>


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
            
            <div className="flex flex-row justify-center items-center space-x-1">
                <div className="w-8 h-8 cursor-pointer" title="Save post">
                  <SavePost/>
                </div>
                {/* <div className="font-semibold text-gray-700 text-sm">1,250</div> */}
              </div>

          </div>
        </div>
      </div>
  )
}

export default index
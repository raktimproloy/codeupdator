import React from 'react'
import Style from "./style.module.css"
import { CommentBox, HeartEmpty, ShareBtn, ThreeDotVerticale } from '@/store/icons/Icons'

function index() {
  return (
    <div className="w-fit h-fit shadow rounded p-3">
          <div className="flex justify-between items-center space-x-5">
              <div className="flex items-center space-x-2">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="text-gray-600 font-semibold flex flex-col  justify-center">
                  <span>Getintocode</span>
                  <span className="text-xs">19 Nov 2023</span>
                </div>
              </div>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <div className="w-5 h-5 text-gray-600 cursor-pointer" title="More">
                    <ThreeDotVerticale/>
                  </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Item 1</a></li>
                  <li><a>Item 2</a></li>
                </ul>
              </div>
              
          </div>
          <div className="flex flex-col">
            <div className="py-2 text-gray-600">
              Notable Changes
              This release marks the transition of Node.js 20.x into Long Term Support {'('}LTS{')'} with the codename {"'"}Iron{"'"}. The 20.x release line now moves into {"'"}Active LTS{"'"} and will remain so until October 2024. After that time, it will move into Maintenance until end of life in April 2026.

              Known issue
              Collecting code coverage via the NODE_V8_COVERAGE environment variable may lead to a hang. This is not thought to be a regression in Node.js 20 {'('}some reports are on Node.js 18{')'}. For more information, including some potential workarounds, see issue #49344.
            </div>
            <div className="my-5">
              <div className="bg-gray-800 rounded-sm sm:px-10 py-20 md:py-48 text-white text-4xl text-center">
                <div className={`${Style.updateEmoji} p-5`}>
                  <div>NodeJs</div>
                  <div>Old version: 14.20.0</div>
                  <div>New version: 14.21.0</div>
                </div>
            </div>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-4">

                <div className="flex flex-col">
                  <div className="w-7 h-7 text-gray-600 cursor-pointer" title="Heart">
                    <HeartEmpty/>
                  </div>
                  <div className="font-semibold text-gray-700 text-sm">1,250</div>
                </div>


                <div className="flex flex-col">
                  <div className="w-7 h-7 text-gray-600 cursor-pointer" title="Comment">
                    <CommentBox/>
                  </div>
                  <div className="font-semibold text-gray-700 text-sm">1,250</div>
                </div>


                <div className="flex flex-col">
                  <div className="w-7 h-7 text-gray-600 cursor-pointer" title="Share">
                    <ShareBtn/>
                  </div>
                  <div className="font-semibold text-gray-700 text-sm">1,250</div>
                </div>


              </div>
            </div>
          </div>
        </div>
  )
}

export default index
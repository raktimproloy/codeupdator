import React from 'react'
import Style from "./style.module.css"
import { CommentBox, SavePost, HeartEmpty, ShareBtn, ThreeDotVerticale } from '@/store/icons/Icons'

function index() {
  return (
    <div className="w-fit h-fit shadow rounded p-3 home_news_feed_card">
          <div className="flex justify-between items-center space-x-5">
              <div className="flex items-center space-x-2">
                <img
                  src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="font-semibold flex flex-col  justify-center">
                  <span>Getintocode</span>
                  <span className="text-xs">19 Nov 2023</span>
                </div>
              </div>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <div className="w-5 h-5 cursor-pointer" title="More">
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
            <div className="py-2">
              Notable Changes
              This release marks the transition of Node.js 20.x into Long Term Support {'('}LTS{')'} with the codename {"'"}Iron{"'"}. The 20.x release line now moves into {"'"}Active LTS{"'"} and will remain so until October 2024. After that time, it will move into Maintenance until end of life in April 2026.

              Known issue
              Collecting code coverage via the NODE_V8_COVERAGE environment variable may lead to a hang. This is not thought to be a regression in Node.js 20 {'('}some reports are on Node.js 18{')'}. For more information, including some potential workarounds, see issue #49344.
            </div>
            <div className="my-5">
            <div className="group bg-gray-800 text-gray-200 rounded-sm text-4xl text-center overflow-hidden relative">
    <img src="https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="" />
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
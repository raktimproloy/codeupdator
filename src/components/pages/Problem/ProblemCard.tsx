'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { CommentBox, SavePost, HeartEmpty, ShareBtn, ThreeDotVerticale } from '@/store/icons/Icons'


const ProblemCard = () => {


    const [imageNumber, setImageNumber] = useState(3);



    return (
        <>
            <div className={`w-fit h-fit shadow rounded p-3 home_news_feed_card my-5`}>
                <div className="flex justify-between items-center space-x-5">
                    <div className="flex items-center space-x-2">
                        {/* <Image
                            src="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F09%2FUntitled-design-14.jpg&signature=3de86691d6ab8d950654a02334fd2774"
                            className="w-9 h-9 rounded-full object-cover" width={500} height={500}
                            alt='card'
                        /> */}
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className='w-9 h-9 rounded-full object-cover' />
                        <div className="font-semibold flex flex-col  justify-center">
                            <span>Getintocode</span>
                            <span className="text-xs">19 Nov 2023</span>
                        </div>
                    </div>
                    {/* <DropDown /> */}

                </div>
                <div className="flex flex-col">
                    <div className="py-2 fle flex-col">
                        <div>
                            Notable Changes
                            This release marks the transition of Node.js 20.x into Long Term Support {'('}LTS{')'} with the codename {"'"}Iron{"'"}. The 20.x release line now moves into {"'"}Active LTS{"'"} and will remain so until October 2024. After that time, it will move into Maintenance until end of life in April 2026.

                            Known issue
                            Collecting code coverage via the NODE_V8_COVERAGE environment variable may lead to a hang. This is not thought to be a regression in Node.js............
                        </div>

                        <div className='w-full flex justify-end'>
                            <a href='#' className='font-semibold mt-5'>Continue reading......</a>
                        </div>
                    </div>
                    <div className="my-5 grid grid-cols-2 gap-3">
                        <div className={`${imageNumber === 3 ? 'col-span-2' : ''} group bg-gray-800 text-gray-200 rounded-sm text-4xl text-center overflow-hidden relative`}>
                            <img src="https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F09%2FUntitled-design-14.jpg&signature=3de86691d6ab8d950654a02334fd2774" alt="" className="h-full w-full cursor-pointer" />
                        </div>
                        <div className="group bg-gray-800 text-gray-200 rounded-sm text-4xl text-center overflow-hidden relative">
                            <img src="https://images.inc.com/uploaded_files/image/1920x1080/code-pano_22148.jpg" alt="" className="h-full w-full cursor-pointer" />
                        </div>
                        <div className="group bg-gray-800 text-gray-200 rounded-sm text-4xl text-center overflow-hidden relative">
                            <img src="https://newsroom.siliconslopes.com/content/images/size/w1000/2018/10/code.jpg" alt="" className="h-full w-full cursor-pointer" />
                        </div>

                    </div>
                    <div className="flex justify-between">
                        <div className="flex space-x-6">

                            <div className="flex flex-row justify-center items-center space-x-1">
                                <div className="w-7 h-7 cursor-pointer" title="Heart">
                                    <HeartEmpty />
                                </div>
                                <div className="font-semibold text-sm">1,250</div>
                            </div>


                            <div className="flex flex-row justify-center items-center space-x-1">
                                <div className="w-7 h-7 cursor-pointer" title="Comment">
                                    <CommentBox />
                                </div>
                                <div className="font-semibold text-sm">1,250</div>
                            </div>

                            <div className="flex flex-row justify-center items-center space-x-1">
                                <div className="w-7 h-7 cursor-pointer" title="Share">
                                    <ShareBtn />
                                </div>
                                <div className="font-semibold text-sm">1,250</div>
                            </div>

                        </div>

                        <div className="flex flex-row justify-center items-center space-x-1">
                            <div className="w-8 h-8 cursor-pointer" title="Save post">
                                <SavePost />
                            </div>
                            {/* <div className="font-semibold text-gray-700 text-sm">1,250</div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ProblemCard;
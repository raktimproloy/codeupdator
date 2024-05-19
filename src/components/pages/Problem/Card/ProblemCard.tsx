import React from 'react'
import Image from 'next/image'
import { CommentBox, SavePost, HeartEmpty, ShareBtn, ThreeDotVerticale } from '@/store/icons/Icons'
import { fetchDataFromServer } from '@/utils/fetch/serverSideFetchApi'
import DefaultProfileImage from "/public/images/default-profile.png";
import OneImage from './Image/OneImage';
import TwoImage from './Image/TwoImage';
import ThreeImage from './Image/ThreeImage';
import Like from './Like';
import Saved from './Saved';

async function ProblemCard ({data}:any) {
    const {id, packages, details, image, likes_user_id, saves_user_id, author, date, author_image, author_name, author_username } = data
    const packagesData = JSON.parse(packages)
    const imagesData = JSON.parse(image)
    const imageNumber = 3;
    const likesData = JSON.parse(likes_user_id)
    const savesData = JSON.parse(saves_user_id)
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
                        <Image
                            className="w-10 h-10 rounded-full"
                            src={author_image ? author_image : DefaultProfileImage}
                            width={100}
                            height={100}
                            alt="profile"
                        />
                        <div className="font-semibold flex flex-col  justify-center">
                            <span>{author_name || ""}</span>
                            <span className="text-xs">{date || ""}</span>
                        </div>
                    </div>
                    {/* <DropDown /> */}
                    <div className="flex flex-row justify-center items-center space-x-1">
                        <div className="w-7 h-7 cursor-pointer" title="Share">
                            <ShareBtn />
                        </div>
                        {/* <div className="font-semibold text-sm">1,250</div> */}
                    </div>

                </div>
                <div className='py-3'>
                    {
                        packagesData && packagesData.length > 0 && packagesData.map(item => 
                        <span key={item.value} className={`indicator-item indicator-top indicator-start badge rounded`} style={{background: item.background, color: item.color}}>{item.label}</span>
                        )
                    }
                </div>
                <div className="flex flex-col">
                    <div className="py-2 flex flex-col">
                        {/* <div>
                            Notable Changes
                            This release marks the transition of Node.js 20.x into Long Term Support {'('}LTS{')'} with the codename {"'"}Iron{"'"}. The 20.x release line now moves into {"'"}Active LTS{"'"} and will remain so until October 2024. After that time, it will move into Maintenance until end of life in April 2026.

                            Known issue
                            Collecting code coverage via the NODE_V8_COVERAGE environment variable may lead to a hang. This is not thought to be a regression in Node.js............
                        </div> */}
                        <div dangerouslySetInnerHTML={{ __html: details || '' }} 
                        // className={`py-2 ${styles.details}`} 
                        />

                        <div className='w-full flex justify-end'>
                            <a href='#' className='font-semibold mt-5'>Continue reading......</a>
                        </div>
                    </div>
                    {
                        imagesData.length === 1 &&
                        <OneImage images={imagesData} />
                    }
                    {
                        imagesData.length === 2 &&
                        <TwoImage images={imagesData} />
                    }
                    {
                        imagesData.length === 3 &&
                        <ThreeImage images={imagesData} />
                    }
                    <div className="flex justify-between">
                        <div className="flex space-x-6">
                            <Like likesData={likesData} id={id} />
                            {/* <div className="flex flex-row justify-center items-center space-x-1">
                                <div className="w-7 h-7 cursor-pointer" title="Heart">
                                    <HeartEmpty />
                                </div>
                                <div className="font-semibold text-sm">1,250</div>
                            </div> */}


                            <div className="flex flex-row justify-center items-center space-x-1">
                                <div className="w-7 h-7 cursor-pointer" title="Comment">
                                    <CommentBox />
                                </div>
                                <div className="font-semibold text-sm">1,250</div>
                            </div>

                            

                        </div>

                            <Saved savesData={savesData} id={id} />
                        {/* <div className="flex flex-row justify-center items-center space-x-1">
                            <div className="w-8 h-8 cursor-pointer" title="Save post">
                                <SavePost />
                            </div>
                            <div className="font-semibold text-gray-700 text-sm">1,250</div>
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}
export default ProblemCard;
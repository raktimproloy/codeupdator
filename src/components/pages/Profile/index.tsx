'use client'
import React, { useEffect, useState } from 'react'
import Card1 from "@/components/shared/PostCard/Card1"
import Bio from '@/components/shared/Profile/Bio'
import Image from 'next/image'
import Styles from "./style.module.css"
import { ImageEdit, Edit } from '@/store/icons/Icons'
import ProfileImageChange from '@/components/shared/Modal/ProfileImageChange/ProfileImageChange'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { FetchMainApi } from '@/utils/fetch/clientSideFetchApi'
import { useCookies } from 'react-cookie'

interface PropsData{
    id: string
}

function Index({id}: PropsData) {
    const [isClient, setIsClient] = useState(false)
 
    useEffect(() => {
      setIsClient(true)
    }, [])
    const profileData = useSelector((state:any) => state.profile)
    const [savedPosts, setSavedPosts] = useState([])
    const [cookie, setCookie] = useCookies(["_token"]);
    const header = {
      'Authorization': `Bearer ${cookie._token}`
    };
    useEffect(() => {
        if(Object.keys(profileData).length > 0){
            const savedPostIds = JSON.parse(profileData.saves_update_post)
            FetchMainApi({url:"/update-post/get/saved/posts", method: "post", data: {ids: savedPostIds}, header:header})
            .then((res) => {
                setSavedPosts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }, [profileData])
    if(isClient){
        return (
          <>
          <div className='max-w-6xl m-auto px-5 mt-[100px]'>
          <div className='grid grid-cols-1 py-5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-10 '>
              <div className='col-span-1 mb-5'>
              <div className='text-center sm:text-left'>
                  <div className="avatar mb-5">
                  <div className={`w-44 rounded-full ${Styles.pictureEdit}`}>
                      <div className={Styles.imageContainer}>
                          <Image src={profileData.profile_image ? profileData.profile_image : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} width={500} height={500} alt="profile" />
                          <label className={Styles.overlay}  htmlFor="my_modal_6">
                              <ImageEdit/>
                          </label>
                          {/* Edit box */}
                          <ProfileImageChange/>
                      </div>
                  </div>
                  </div>
                  <div className='text-2xl flex justify-between'>
                      <span className='font-bold'>{profileData.full_name || ""}</span>
                      <div className='text-gray-500 cursor-pointer'>
                          <Link href='/setting'>
                          <Edit/>
                          </Link>
                      </div>
                  </div>
                  <p className='font-semibold text-gray-500'>@{profileData.username || ""}</p>
                  <a href={`${profileData.portfolio ? profileData.portfolio : ""}`} target='_blank'>{profileData.portfolio || ""}</a>
              </div>
      
              <div className='mt-10'>
                  <h1 className='font-bold text-2xl'>Info:</h1>
                  <p>
                      Email: <span>{profileData.email || ""}</span>
                  </p>
                  <p>
                      Location: <span>{profileData.location || ""}</span>
                  </p>
              </div>
                  <div className='mt-5 mb-5 md:hidden'>
                      <Bio/>
                  </div>
              </div>
              <div className='col-span-2'>
                    {
                        savedPosts && savedPosts.length > 0 && savedPosts.map((post,index) => 
                            <Card1 data={post} count={index} key={index}/> 
                        )
                    }
              </div>
              <div className='col-span-1 hidden md:block'>
                  <Bio/>
              </div>
          </div>
          </div>
          </>
        )
    }
}

export default Index
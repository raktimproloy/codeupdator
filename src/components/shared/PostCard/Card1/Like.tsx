'use client'
import React, { useEffect, useState } from 'react'
import {HeartEmpty} from '@/store/icons/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { FetchMainApi } from '@/utils/fetch/clientSideFetchApi'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import { updateProfileProperty } from '@/store/redux/slices/profileSlice'

export default function Like({likesData, id}:any) {
    const profileData = useSelector((state:any) => state.profile)
    const [cookie, removeCookie] = useCookies();
    const dispatch = useDispatch()
    const [hasLiked, setHasLiked] = useState(false)
    const router = useRouter()
    const [totalLiked, setTotalLiked] = useState(likesData?.length)
    const header = {
        'Authorization': `Bearer ${cookie._token}`
    };

    // Handle Liked or not
    useEffect(() => {
        if(Object.keys(profileData).length > 0){
            const userLikesData = JSON.parse(profileData.likes_update_post)
            setHasLiked(userLikesData.includes(id.toString()))
        }
    }, [profileData])

    const handleLikeButton = () => {
        if(profileData.id){
            if(hasLiked){
                setTotalLiked(totalLiked - 1)
                setHasLiked(false)
            }else{
                setTotalLiked(totalLiked + 1)
                setHasLiked(true)
            }
    
            const reqData = {
                post_id: id,
                user_id: profileData.id,
                like_status: !hasLiked
            }
            FetchMainApi({url:`/update-post/like/${id}`, method:"put", header:header, data:reqData})
                .then((res) => {
                    dispatch(updateProfileProperty("likes_update_post", res.data.ids));
                })
                .catch((err) => {
                    // if(!hasLiked){
                    //     setTotalLiked(totalLiked - 1)
                    //     setHasLiked(false)
                    // }else{
                    //     setTotalLiked(totalLiked + 1)
                    //     setHasLiked(true)
                    // }
                    console.log(err)
                })
        }else{
            router.push("/login")
        }
    }
  return (
    <div className={`flex flex-row justify-center items-center space-x-1 cursor-pointer ${hasLiked ? "text-red-500" : ""}`} onClick={handleLikeButton}>
        <div className="w-7 h-7" title="Heart">
            <HeartEmpty/>
        </div>
        <div className="font-semibold text-sm">{totalLiked}</div>
    </div>
  )
}

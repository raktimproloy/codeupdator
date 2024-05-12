'use client'
import React, { useEffect, useState } from 'react'
import {SavePost} from '@/store/icons/Icons'
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { FetchMainApi } from '@/utils/fetch/clientSideFetchApi';
import { updateProfileProperty } from '@/store/redux/slices/profileSlice';

export default function Saved({savesData, id}:any) {
    const profileData = useSelector((state:any) => state.profile)
    const [cookie, removeCookie] = useCookies();
    const [hasSaved, setHasSaved] = useState(false)
    const router = useRouter()
    const dispatch = useDispatch()
    const [totalSaved, setTotalSaved] = useState(savesData?.length)
    const header = {
        'Authorization': `Bearer ${cookie._token}`
    };
    // Handle Liked or not

    useEffect(() => {
        if(Object.keys(profileData).length > 0){
            const userSavesData = JSON.parse(profileData.saves_update_post)
            setHasSaved(userSavesData.includes(id.toString()))
        }
    }, [profileData])

    const handleLikeButton = () => {
        if(profileData.id){
            if(hasSaved){
                setTotalSaved(totalSaved - 1)
                setHasSaved(false)
            }else{
                setTotalSaved(totalSaved + 1)
                setHasSaved(true)
            }
    
            const reqData = {
                post_id: id,
                user_id: profileData.id,
                save_status: !hasSaved
            }
            FetchMainApi({url:`/update-post/save/${id}`, method:"put", header:header, data:reqData})
                .then((res) => {
                    dispatch(updateProfileProperty("saves_update_post", res.data.ids));
                })
                .catch((err) => {
                    console.log(err)
                })
        }else{
            router.push("/login")
        }
    }

  return (
    <div className={`flex flex-row justify-center items-center space-x-1 ${hasSaved ? "text-red-500" : ""}`}
    onClick={handleLikeButton}
    >
        <div className="w-8 h-8 cursor-pointer" title="Save post">
            <SavePost/>
        </div>
        {/* <div className="font-semibold text-gray-700 text-sm">1,250</div> */}
    </div>
  )
}

'use client'
import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'
import DefaultProfileImage from "/public/images/default-profile.png";

export default function ProfileImage() {
    const profileData = useSelector((state:any) => state.profile)
  return (
    <Image
        className="w-9 h-9 rounded-full"
        src={profileData.profile_image ? profileData.profile_image : DefaultProfileImage}
        width={100}
        height={100}
        alt="profile"
    />
  )
}

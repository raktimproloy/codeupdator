import React from 'react'
import ProfilePage from "@/components/pages/Profile"

interface PropsData{
    params: {
        id: string
    }
}

function page({params}:PropsData) {
    const id = params.id
    console.log(id)
  return (
    <ProfilePage id={id}/>
  )
}

export default page
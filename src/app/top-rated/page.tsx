import React from 'react'
import { AuthFunc } from '@/utils/Auth'
import { redirect } from 'next/navigation';
import AboutPage from "@/components/pages/TopRated"

function page() {
    // const isAuth = AuthFunc();


    // if(!isAuth) {
    //     redirect("/");
    // }
  return (
    <AboutPage/>
  )
}

export default page
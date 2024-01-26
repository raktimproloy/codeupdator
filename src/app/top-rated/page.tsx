import React from 'react'
import { isAuthenticated } from '@/utils/Auth'
import { redirect } from 'next/navigation';
import AboutPage from "@/components/pages/TopRated"

function page() {
    const isAuth = isAuthenticated;


    if(!isAuth) {
        redirect("/");
    }
  return (
    <AboutPage/>
  )
}

export default page
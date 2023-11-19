import React from 'react'
import { isAuthenticated } from '@/utils/Auth'
import { redirect } from 'next/navigation';

function page() {
    const isAuth = isAuthenticated;


    if(!isAuth) {
        redirect("/");
    }
  return (
    <div>This is protected about</div>
  )
}

export default page
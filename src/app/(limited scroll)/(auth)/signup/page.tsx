'use client'
import React from 'react'
import SignupPage from "@/components/pages/Signup"
import { AuthFunc } from '@/utils/Auth'
import { useRouter } from 'next/navigation'

function Page() {
  const isAuth = AuthFunc()
  const router = useRouter()
  if(isAuth){
    router.push("/")
  }
  return (
    <SignupPage/>
  )
}

export default Page
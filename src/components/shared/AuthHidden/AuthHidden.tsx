'use client'
import { AuthFunc } from '@/utils/Auth';
import React from 'react'

function AuthHidden({
    children,
  }: any) {
const isAuth = AuthFunc();
  return (
    <>
    {isAuth ? "" : children}
    
    </>
  )
}

export default AuthHidden
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Button() {
    const router = useRouter()
  return (
    <button className="w-full btn btn-primary rounded" onClick={() => {router.push("/signup")}}>
        Sign up now!
    </button>
  )
}

export default Button
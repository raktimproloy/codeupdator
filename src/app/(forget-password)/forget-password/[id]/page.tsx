import React from 'react'
import ChangePassword from '@/components/pages/ForgetPassword/ChangePassword'

function page({params}: any) {
    console.log(params.id)
  return (
    <ChangePassword/>
  )
}

export default page
import React from 'react'
import Card1 from "@/components/shared/PostCard/Card1"
import Bio from '@/components/shared/Profile/Bio'
import Image from 'next/image'
import Styles from "./style.module.css"
import { ImageEdit } from '@/store/icons/Icons'
import ProfileImageChange from '@/components/shared/Modal/ProfileImageChange/ProfileImageChange'


interface PropsData{
    id: string
}

function index({id}: PropsData) {
  return (
    <>
    <div className='max-w-6xl m-auto px-5 mt-[100px]'>
    <div className='grid grid-cols-1 py-5 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-10 '>
        <div className='col-span-1 mb-5'>
        <div className='text-center sm:text-left'>
            <div className="avatar mb-5">
            <div className={`w-44 rounded-full ${Styles.pictureEdit}`}>
                <div className={Styles.imageContainer}>
                    <Image src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" width={300} height={300} alt="profile" />
                    <label className={Styles.overlay}  htmlFor="my_modal_6">
                        <ImageEdit/>
                    </label>
                    {/* Edit box */}
                    <ProfileImageChange/>
                </div>
            </div>
            </div>
            <h1 className='font-bold text-2xl'>Joshim Uddin</h1>
            <p>@joshim_laravelest</p>
            <a href='/'>joshim.bot.xyz</a>
        </div>

        <div className='mt-10'>
            <h1 className='font-bold text-2xl'>Info:</h1>
            <p>
                Email: <span>joshimgandu@gmail.com</span>
            </p>
            <p>
                Location: <span>Uganda</span>
            </p>
        </div>
            <div className='mt-5 mb-5 md:hidden'>
                <Bio/>
            </div>
        </div>
        <div className='col-span-2'>
            <Card1 count={1}/>
        </div>
        <div className='col-span-1 hidden md:block'>
            <Bio/>
        </div>
    </div>
    </div>
    </>
  )
}

export default index
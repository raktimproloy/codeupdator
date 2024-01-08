import React from 'react'

function ProfileInfo() {
  return (
    <>
        <div className='text-center sm:text-left'>
            <div className="avatar mb-5">
                <div className="w-44 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
    </>
  )
}

export default ProfileInfo
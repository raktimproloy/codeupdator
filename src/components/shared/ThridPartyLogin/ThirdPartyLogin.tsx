import React, { useEffect } from 'react'
import { Facebook, Google, Github } from '@/store/icons/Icons'
import { signOut, useSession } from 'next-auth/react';
import { AuthFunc } from '@/utils/Auth';
import { FetchMainApi } from '@/utils/fetch/clientSideFetchApi';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

export default function ThirdPartyLogin() {
    const router = useRouter()
    const [cookie, setCookie] = useCookies(["_token"])
    const session = useSession()
    const isAuth = AuthFunc()

    useEffect(() => {
        if(session.data && !isAuth){
            const userData = session?.data?.user
            const loginData = {
                full_name: userData?.name,
                email: userData?.email,
                profile_image: userData?.image
            }
            FetchMainApi({url: "/user/google/login", method: "post", data:loginData})
            .then(res => {
                setCookie("_token",res.data.token)
                router.push("/")
            })
            .catch(err => {
                console.log(err)
            })
        }
    }, [session])
    
    // Handle Google Sign in
    const popupCenter = (url:any, title:any) => {
        const dualScreenLeft = window.screenLeft ?? window.screenX;
        const dualScreenTop = window.screenTop ?? window.screenY;
    
        const width =
            window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
    
        const height =
            window.innerHeight ??
            document.documentElement.clientHeight ??
            screen.height;
    
        const systemZoom = width / window.screen.availWidth;
    
        const left = (width - 500) / 2 / systemZoom + dualScreenLeft;
        const top = (height - 550) / 2 / systemZoom + dualScreenTop;
    
        const newWindow = window.open(
            url,
            title,
            `width=${500 / systemZoom},height=${550 / systemZoom
            },top=${top},left=${left}`
        );
    
        newWindow?.focus();
    };

    const googleSignin = () => {
        popupCenter("/google", "sample sign in")
    }
  
  return (
    <div className='flex flex-col space-y-3 justify-between items-center'>
        <button className="btn w-full rounded" onClick={googleSignin}>
        <Google/>
        Login with Google
        </button>
        <button className="btn w-full rounded">
        <Facebook/>
        Login with Facebook
        </button>
        <button className="btn w-full rounded">
        <Github/>
        Login with Github
        </button>
    </div>
  )
}

'use client'
import { AuthFunc } from "@/utils/Auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const router = useRouter()
    const isAuth = AuthFunc()
    
    useEffect(() => {
      const redirectToLogin = () => {
        if (isAuth) {
          const pathStore = JSON.parse(sessionStorage.getItem('path_info'))
          if(pathStore && pathStore.from !== "/login"){
            router.push(pathStore.from);
          }else{
            router.push("/");
          }
        }
      };
  
      // Set a timeout to delay the redirection
      const timeoutId = setTimeout(redirectToLogin, 200);
  
      // Clean up the timeout on component unmount
      return () => clearTimeout(timeoutId);
    }, [isAuth, router]);
    return (
        <>
            {children}
        </>
    )
  }
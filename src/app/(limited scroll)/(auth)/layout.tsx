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
        if (!isAuth) {
          router.push("/login");
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
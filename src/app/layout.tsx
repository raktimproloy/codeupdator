// import type { Metadata } from 'next'
import { PT_Sans } from 'next/font/google'
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import './globals.css'

const pt_sans = PT_Sans({ weight: ['400', "700"], subsets: ['cyrillic'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="light">
      <head>
      <link rel="icon" href="/icon.png" type="image/png" sizes='32x32' />
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.1.1/flowbite.min.css"  rel="stylesheet" /> */}
      </head>
      <body className={pt_sans.className} suppressHydrationWarning={true}>
        {/* {!pathname.includes("login") && <Navbar/>} */}
         <Navbar/>
        <div className='w-full mt-[75px]'>
          {children}
        </div>
        {/* {!pathname.includes("login") && <Footer/>} */}
        {/* <Footer/> */}
        
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.1.1/flowbite.min.js"></script>
      </body>
    </html>
  )
}

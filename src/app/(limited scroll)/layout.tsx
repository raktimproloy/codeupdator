import FullFooter from "@/components/shared/Footer/FullFooter"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  
    return (
        <>
          <div className='w-full mt-[75px]'>
            {children}
          </div>
          <FullFooter/>
        </>
    )
  }
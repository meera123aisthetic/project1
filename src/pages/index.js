import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
// import styles from '@/styles/Home.css'
// '/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {/* <div className='container'>
    <h1 style={{color:'white',fontSize:"3rem"}}>Other verticals </h1>
    <div className='imageDiv'>
   <img src="/image1.png" alt="me"/>
   </div>
   
   </div>
   <style jsx> {`
   img{
    height: 100%;
    width: auto;
    display: block;
    overflow: hidden;
   }
   .imageDiv{
    margin-bottom:5rem
   }
   `
   
   }
    </style> */}

      {/* <div className='bg-black p-1 '>
        <div className='mx-16 my-10'>
          <h1 className='text-6xl text-white font-extrabold'>Other Verticals</h1>
        </div>
        <div className='flex h-screen w-screen container mx-14 my-10'>
          <div className='w-full mr-8'>
            <img src="/image1.png" alt="me" className='h-4/5 w-full' />
          </div>
          <div className='w-1/5 mr-8'>
            <img src="/image1.png" alt="me" className='h-4/5 w-full' />
          </div>
          <div className='w-1/5 mr-8'>
            <img src="/image1.png" alt="me" className='h-4/5 w-full' />
          </div>
          <div className='w-1/5 mr-8'>
            <img src="/image1.png" alt="me" className='h-4/5 w-full' />
          </div>
        </div>
      </div> */}

      <div className='bg-black p-1 h-screen w-screen'>
        <div className='mx-16 mt-16 mb-10'>
          <h1 className='text-5xl text-white font-extrabold'>Other Verticals</h1>
        </div>
        <div className='grid grid-cols-7 gap-11 ml-16 mr-10 mt-10 mb-4'>
          <div className='w-full mr-8 col-span-4'>
            <img src="/image1.png" alt="me" className='h-4/5 w-full' />
          </div>
          <div className='grid grid-cols-3 gap-7 col-span-3'>
            <div className=' mr-8'>
              <img src="/image1.png" alt="me" className='h-4/5 w-full' />
            </div>
            <div className=' mr-8'>
              <img src="/image1.png" alt="me" className='h-4/5 w-full' />
            </div>
            <div className=' mr-8'>
              <img src="/image1.png" alt="me" className='h-4/5 w-full' />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

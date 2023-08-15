import Image from 'next/image'
import { Inter } from 'next/font/google'
import { signOut } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 className='text-4xl text-green-500'>Netflix</h1>
      <button className='h-10 w-full bg-white' onClick={() => signOut()}>Logout!</button>
    </>
  )
}

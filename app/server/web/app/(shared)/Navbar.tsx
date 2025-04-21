"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useGlobalContext } from '../(contest)/(context)/Global'

type Props = {}

const Navbar = (props: Props) => {
  const currentRoute = usePathname();
  const {loggedIn, setLoggedIn, userId, setUserId, theme, setTheme} = useGlobalContext();
  return (
    <header>
      <nav className='flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4'>
        <div className='hidden sm:block'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
          </svg>
        </div>
        <div className='flex justify-between items-center gap-10'>
          <Link href="/" className="hover:text-green-500">Home</Link>
          <Link href="/" className="hover:text-green-500">IDE</Link>
          <Link href={`${loggedIn === true ? "/contest" : "/"}`} className="hover:text-green-500">Contest</Link>
        </div>
        <div className='flex justify-between items-center gap-5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
          <div className={`${loggedIn === false ? 'hidden': ''}`} onClick={(e) => setLoggedIn(false)}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </div>
          <div className={`flex justify-between items-center gap-5 ${loggedIn === true ? 'hidden' : ''}`}>
            <Link href="/signup"><button className='bg-neutral-600 w-24 py-1.5 rounded-lg font-bold hover:bg-neutral-500'>SignUp</button></Link>
            <Link href="/login"><button className='bg-green-600 w-24 py-1.5 rounded-lg font-bold hover:bg-green-500'>Login</button></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
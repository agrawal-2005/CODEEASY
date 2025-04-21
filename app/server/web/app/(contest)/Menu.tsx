import Link from 'next/link'
import React from 'react'
import { useContestContext } from './(context)/Contest'

type Props = {}

const Menu = (props: Props) => {
  const {sidemenu, setSidemenu} = useContestContext();
  return (
    <header>
        <nav className='flex items-center gap-5 w-full text-wh-10 bg-neutral-800 h-14 px-10 rounded-lg'>
            <Link href="/contest" className={`hover:text-green-500 ${sidemenu === "problems" ? 'text-green-500' : ''}`} onClick={(e) => setSidemenu("problems")}>Problems</Link>
            <Link href="/contest" className={`hover:text-green-500 ${sidemenu === "description" ? 'text-green-500' : ''}`} onClick={(e) => setSidemenu("description")}>Description</Link>
            <Link href="/contest" className={`hover:text-green-500 ${sidemenu === "submissions" ? 'text-green-500' : ''}`} onClick={(e) => setSidemenu("submissions")}>Submissions</Link>
        </nav>
    </header>
  )
}

export default Menu
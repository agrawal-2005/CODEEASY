import React from 'react'
import Link from 'next/link'

type Props = {}

const Testcaseheader = (props: Props) => {
  return (
    <header>
        <nav className='flex items-center gap-5 w-full text-wh-10 bg-neutral-800 h-14 px-10 rounded-t-lg'>
            <Link href="/contest" className="hover:text-green-500">Testcase</Link>
            <Link href="/contest" className="hover:text-green-500">Test Result</Link>
        </nav>
    </header>
  )
}

export default Testcaseheader
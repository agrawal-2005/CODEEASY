"use client"

import React from 'react'
import Menu from './Menu'
import { useContestContext } from './(context)/Contest'

type Props = {}

const Problem = (props: Props) => {

  const {sidemenu, setSidemenu} = useContestContext();

  return (
    <div className='h-full'>
        <Menu/>
        <div className={`flex-col bg-neutral-900 text-wh-10 py-9 px-4 rounded-lg h-full ${sidemenu !== "problems" ? 'hidden' : ''}`}>
            <ul>
              <div className='flex justify-between items-center px-3 py-2 border-b-green-500 border-b-2 hover:bg-neutral-800 cursor-pointer'>
                <li className='text-2xl'>Problem 1</li>
                <p>5 Points</p>
              </div>
              <div className='flex justify-between items-center px-3 py-2 border-b-green-500 border-b-2 hover:bg-neutral-800 cursor-pointer'>
                <li className='text-2xl'>Problem 2</li>
                <p>7 Points</p>
              </div>
            </ul>
        </div>
        <div className={`flex-col bg-neutral-900 text-wh-10 py-9 px-4 rounded-lg h-full ${sidemenu !== "description" ? 'hidden' : ''}`}>
            <h1 className='text-3xl'>791. Custom Sort String</h1>
            <br/>
            <p className='text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas facere aspernatur, nostrum explicabo perspiciatis cumque ut, repellat id minima, sequi saepe. Commodi doloremque facilis repellendus omnis architecto quod nam aut.</p>
        </div>
        <div className={`flex-col bg-neutral-900 text-wh-10 py-9 px-4 rounded-lg h-full ${sidemenu !== "submissions" ? 'hidden' : ''}`}>
            <ul>
              <div className='flex justify-between items-center px-3 py-2 border-b-green-500 border-b-2 hover:bg-neutral-800 cursor-pointer'>
                <li className='text-2xl'>Submission 1</li>
                <p className='text-green-500'>Accepted</p>
                <p>Problem 1</p>
              </div>
              <div className='flex justify-between items-center px-3 py-2 border-b-green-500 border-b-2 hover:bg-neutral-800 cursor-pointer'>
                <li className='text-2xl'>Submission 2</li>
                <p className='text-red-500'>Wrong Answer</p>
                <p>Problem 2</p>
              </div>
            </ul>
        </div>
    </div>    
  )
}

export default Problem
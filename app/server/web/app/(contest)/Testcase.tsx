"use client"

import React from 'react'
import Testcaseheader from './Testcaseheader'
import { useContestContext } from './(context)/Contest'

const Testcase = () => {

    const {userCode, setUserCode, testCase, setTestCase, output, setOutput} = useContestContext();

  return (
    <div className='bg-neutral-900 p-3 pb-10'>
        <Testcaseheader/>
        <div className='flex-col ml-3 mr-3'>
            <div className='flex gap-3 mt-3'>
                <div className='flex bg-neutral-700 px-5 h-8 items-center rounded-lg text-wh-10 text-md hover:cursor-pointer'>Case 1</div>
                <div className='flex px-5 h-8 items-center rounded-lg text-wh-10 text-md hover:bg-neutral-700 cursor-pointer'>Case 2</div>
            </div>
            <div className='mt-3'>
                <p className='text-wh-10 text-base mb-3'>Input = </p>
                <textarea className='bg-neutral-700 w-full rounded-lg text-wh-10 text-lg items-center h-24 px-3 py-1' onChange={(e) => setTestCase(e.target.value)}></textarea>
            </div>
            <div className='mt-3'>
                <p className='text-wh-10 text-base mb-3'>Output = </p>
                <div className='flex bg-neutral-700 w-full rounded-lg text-wh-10 text-lg items-center h-12 px-3'>{output}</div>
            </div>
        </div>
    </div>
  )
}

export default Testcase
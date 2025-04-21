"use client"

import React from 'react'
import { useContestContext } from './(context)/Contest';

type Props = {}

const Editormenu = (props: Props) => {

    const {userCode, setUserCode, testCase, setTestCase, output, setOutput, language, setLanguage, size, setSize} = useContestContext();

  return (
    <div className='flex justify-between bg-neutral-800 text-wh-10 px-10 h-14 rounded-lg items-center'>
        <div className='flex items-start gap-10'>
            <select name='language' className='bg-neutral-700 px-4 py-1' onChange={(e) => setLanguage(e.target.value)}>
                <option value="cpp" className='hover:bg-green-500'>C++</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
            </select>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>
        <div className='flex items-end gap-10'>
            <p>Font Size: {size}</p>
            <input type='range' min="12" max="30" className='accent-green-500' onChange={(e) => setSize(e.target.value)}></input>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Editormenu
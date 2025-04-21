'use client'

import React from 'react'
import Editormenu from './Editormenu'
import { Editor } from '@monaco-editor/react'
import Editorfooter from './Editorfooter'
import { useContestContext } from './(context)/Contest'


const Codeeditor = () => {
  
  const {userCode, setUserCode, testCase, setTestCase, output, setOutput, language, setLanguage, size, setSize} = useContestContext();
  const options = { fontSize: size}

  return (
    <div className='h-full'>
        <Editormenu/>
        <div className='flex-col bg-neutral-900 text-wh-10 py-9 px-4 h-full rounded-t-lg'>
          <Editor height="60vh" language={language} options={options} defaultValue="// some comment" theme='vs-dark' onChange={(value) => setUserCode(value)}/>
        </div>
        <Editorfooter/>
    </div>
  )
}

export default Codeeditor
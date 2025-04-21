"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps{
    userCode: any,
    setUserCode: Dispatch<SetStateAction<any>>,
    testCase: any,
    setTestCase: Dispatch<SetStateAction<any>>,
    output: any,
    setOutput: Dispatch<SetStateAction<any>>
    language: any,
    setLanguage: Dispatch<SetStateAction<any>>
    size: any,
    setSize: Dispatch<SetStateAction<any>>
    sidemenu: any,
    setSidemenu: Dispatch<SetStateAction<any>>
    problemId: any,
    setProblemId: Dispatch<SetStateAction<any>>
    submissionId: any,
    setSubmissionId: Dispatch<SetStateAction<any>>
}

const ContestContext = createContext<ContextProps>({
    userCode: ``,
    setUserCode: (): any => ``,
    testCase: '',
    setTestCase: (): any => '',
    output: '',
    setOutput: (): any => '',
    language: '',
    setLanguage: (): any => '',
    size: '',
    setSize: (): any => '',
    sidemenu: '',
    setSidemenu: (): any => '',
    problemId: '',
    setProblemId: (): any => '',
    submissionId: '',
    setSubmissionId: (): any => ''
})

export const ContestContextProvider = ({children}) => {
    const [userCode, setUserCode] = useState(``);
    const [testCase, setTestCase] = useState("");
    const [output, setOutput] = useState("");
    const [language, setLanguage] = useState("cpp");
    const [size, setSize] = useState(18);
    const [sidemenu, setSidemenu] = useState("problems");
    const [problemId, setProblemId] = useState("Sample");
    const [submissionId, setSubmissionId] = useState("Sample");

    return(
        <ContestContext.Provider value={{userCode, setUserCode, testCase, setTestCase, output, setOutput, language, setLanguage, size, setSize, sidemenu, setSidemenu, problemId, setProblemId, submissionId, setSubmissionId}}>
            {children}
        </ContestContext.Provider>
    )
}

export const useContestContext = () => useContext(ContestContext)
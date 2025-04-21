"use client"

import Link from "next/link";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { handleLogin } from "../submit";
import { useGlobalContext } from "../(contest)/(context)/Global";

function submit(email, password, router, setLoggedIn, setUserId){
    const res = handleLogin(email, password);
    if(res.status === "ok"){
        setLoggedIn(true);
        setUserId(email);
        router.push("/");        
    }else{
        setLoggedIn(false)
        alert("Invalid Credentials");
    }
}

export default function login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()
    const {loggedIn, setLoggedIn, userId, setUserId} = useGlobalContext();

    return(
        <div className="flex justify-center mt-3 items-center h-5/6">
            <div className="flex flex-col justify-center items-center bg-neutral-800 w-1/3 text-wh-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-24 h-24 mb-12 mt-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <p className="text-lg mb-3">Don't have an account, <Link href="/signup" className="text-green-600 hover:text-green-500">Sign Up</Link></p>
                <form className="flex flex-col justify-center items-center gap-3 w-full mb-3">
                    <input type="email" placeholder="Email" name="email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} className="h-12 border-none w-3/4 rounded-md px-5 bg-neutral-900 font-bold"></input>
                    <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} className="h-12 border-none w-3/4 rounded-md px-5 bg-neutral-900 font-bold"></input>
                    <input type="button" onClick={(e) => submit(email,password,router,setLoggedIn, setUserId)} value="Login" className="mt-3 h-12 px-14 bg-green-500 rounded-lg font-bold cursor-pointer"/>

                </form>
            </div>
            
        </div>
    )
}
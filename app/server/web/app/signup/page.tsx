"use client"

import { useState } from "react";
import Link from "next/link";
import { handleLogin, handleSignUp } from "../submit";
import { useRouter } from "next/navigation";

function submit(email, password, cPassword, router){
    const res = handleSignUp(email, password, cPassword);
    if(res.status === "ok"){
        router.push("/login");
    }else if(res.status === "mismatch"){
        alert("Password and Confirm Password should be same.");
    }
}

export default function signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const router = useRouter();

    return(
        <div className="flex justify-center mt-3 items-center h-5/6">
            <div className="flex flex-col justify-center items-center bg-neutral-800 w-1/3 text-wh-10 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-24 h-24 mb-12 mt-12">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
                <p className="text-lg mb-3">Already have an Account, <Link href="/login" className="text-green-600 hover:text-green-500">Log In</Link></p>
                <form className="flex flex-col justify-center items-center gap-3 w-full mb-3">
                    <input type="email" placeholder="Email" name="email" autoComplete="email" onChange={(e) => setEmail(e.target.value)} className="h-12 border-none w-3/4 rounded-md px-5 bg-neutral-900 font-bold"></input>
                    <input type="password" placeholder="Password" name="password" onChange={(e) => setPassword(e.target.value)} className="h-12 border-none w-3/4 rounded-md px-5 bg-neutral-900 font-bold"></input>
                    <input type="password" placeholder="Confirm Password" name="cpassword" onChange={(e) => setCPassword(e.target.value)} className="h-12 border-none w-3/4 rounded-md px-5 bg-neutral-900 font-bold"></input>
                    <input type="button" onClick={(e) => submit(email,password,cPassword, router)} value="Sign Up" className="mt-3 h-12 px-14 bg-green-500 rounded-lg font-bold cursor-pointer"/>
                </form>
            </div>
            
        </div>
    )
}
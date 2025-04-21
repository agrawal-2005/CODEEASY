import {redirect} from "next/navigation"
import axios from "axios";

export async function handleCode(file1, file2, language){


    var value = {output: "Default Output"};

    try{
        // console.log(file1);
        // console.log(file2);
        // console.log(language);
        // let tmp="fsd";
        await axios.post("http://localhost:3003/send-to-kafka",{
            file1,file2,language
        })
        .then(res=>{
            value = res;
        })
    }catch{
        console.log("Error");
    }

    return value;
}

export function handleLogin(email, password){
    console.log(email);
    console.log(password);

    const res = {
        status: "ok"
    };
    return res;
}

export function handleSignUp(email, password, cpassword){
    console.log(email);
    console.log(password);
    const res = {
        status: "ok"
    };
    if(password !== cpassword){
        res.status = "mismatch";
    }
    return res;
}
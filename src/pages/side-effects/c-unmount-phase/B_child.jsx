

import { useEffect } from "react";

export default function B_child(){

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log("Welcome to Child")
        },1000)

        return(()=>{
             console.log("Unmount Phase is calling!!!",intervalId)
            clearInterval(intervalId)
        })

    },[])

    return <div>
        <p> Iam a Child Page </p>
    </div>








}
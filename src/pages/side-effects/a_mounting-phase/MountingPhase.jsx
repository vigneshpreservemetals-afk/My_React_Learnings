

import { useState,useEffect } from "react";

export default function MountingPhase () {

    const[price,setPrice] = useState(200);
    const[tax,setTax] = useState(0)

    useEffect (()=> {
        setTax(price+ ( price*3.5/100 + price*3.5/100))
    },[]);

    return <div>
        <h3> Side Effects - Mounting Phase Example </h3>

       <p> Price: {price} </p> 
       <p> Tax Amount : {tax} </p>
       <button onClick={()=> setPrice(price+1)}> Add Price </button>


    </div>
}


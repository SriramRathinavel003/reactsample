import React, { useState } from "react";
import {useEffect } from "react";
 function Hoops(){
    const [num,setNum]=useState(0);
    function incrementNumber(){
        setNum(num+1);
    }
    return(
        <div>
            <h1>
                {num}
            </h1>
            <button onClick={incrementNumber}>Increment 
            </button>
            <Timer/>
        </div>
    )
}
export default Hoops;
//timer 
function Timer(){
    const [count, setCount]=useState(0);
    useEffect(()=> {setTimeout(()=>{
        setCount((count)=> count+1);

    },2000);
});
return(
    <h1>
        I've rendered {count} time!
    </h1>
)
}
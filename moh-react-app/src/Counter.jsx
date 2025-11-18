import React, { useState } from "react";

function Counter(){
    
    const [number,add]  = useState(0);

    const adding = () =>{
        add(number+1);
    }
    const increasing = () =>{
        add(number-1);
    }
    const reset = () =>{
        add(0);
    }


    return (
        <>
        <div className="counter-container">
              <div className="number">{number}</div>
              <button className="counter"  onClick={adding}>add</button>
              <button className="counter"  onClick={reset}>reset</button>
              <button className="counter"  onClick={increasing}>increasing</button>
              
        </div>
        </>
    );

}

export default Counter
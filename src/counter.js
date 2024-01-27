import { useState } from "react";
export default function Counter() {
    let [counter, setCounter] = useState(10)

    const AddValue = () =>{
        if(counter <= 19)
        setCounter(counter + 1)
    }
    const RemoveValue = () =>{
        if(counter > 0)
        setCounter(counter-1)
    }
    
   return(
    <>
      <h1>counter : {counter} </h1>
      <button onClick={AddValue}> Add </button>
      <br></br>
      <button onClick={RemoveValue}> Remove </button>
    </>
   )
}




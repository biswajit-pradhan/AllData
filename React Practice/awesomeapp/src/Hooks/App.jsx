import { useState } from "react";
import "./index.css";


const App=()=>{

    const [count,setCount]=useState(new Date().toLocaleTimeString());

    const IncNum=()=>{
        setCount(count+1);
    }
    const DecNum=()=>{
        setCount(count-1)
    }
    const Clear=()=>{
        setCount(0)
    }
    const timeChange=()=>{
        setCount(new Date().toLocaleTimeString());
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={IncNum}>Increment</button>
            <button onClick={DecNum}>Decrement</button>
            <button onClick={Clear}>Clear</button>
            <button onClick={timeChange}>Get Time</button>
        </>
    )
}
export default App;
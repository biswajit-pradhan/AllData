import { useState } from "react";
import "./index.css";


const App=()=>{

    const [currentTime,setTime]=useState(new Date().toLocaleTimeString().replace("am","AM").replace("pm","PM"));

    const UpdateTime=()=>{
        setTime(new Date().toLocaleTimeString().replace("am","AM").replace("pm","PM"));
    }

    return (
        <>
            <h1>{currentTime}</h1>
            <button onClick={UpdateTime}>Get Time</button>
        </>
    )
}
export default App;
import "./index.css"
import { useState } from 'react';

const App=()=>{

    const [currentTime,setTime]=useState(new Date().toLocaleTimeString().replace("am","AM").replace("pm","PM"));
    const UpdateTime=()=>{
        setTime(new Date().toLocaleTimeString().replace("am","AM").replace("pm","PM"));
    }
    setInterval(UpdateTime,1000)
    return <>
        <h1>{currentTime}</h1>
    </>
}
export default App;
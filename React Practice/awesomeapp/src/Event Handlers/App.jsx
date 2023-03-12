import "./index.css";
import { useState } from 'react';

const App=()=>{

    // const purple="purple";
    const [bg,setBg]=useState("purple");
    const [name,setName]=useState("Click Me");

    const bgChange=()=>{
        setBg("green")
        setName("You clicked once")   
    }
    const bgBack=()=>{
        setBg("red")
        setName("You clicked twice")   
    }

    return (
        <>
            <div style={{backgroundColor: bg}}>
                <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
            </div>
        </>
    )
}
export default App;
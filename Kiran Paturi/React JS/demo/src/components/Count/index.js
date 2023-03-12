import { useState } from "react";
import Header from "../Header";

const Count=()=>{

    const [count,action]=useState(0);
    const increment=(e)=>{
        action(count+1)
    };

    return (
        <div>
            <Header count={count}/>
            
            <button className="btn btn-primary" onClick={increment}>Count</button>
        </div>
    );
}
export default Count;
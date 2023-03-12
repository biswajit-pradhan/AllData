import { useState } from "react";

const Counter=()=>{

    const [count,action]=useState(0);
    const increment=(e)=>{
        action(count+1)
    };
    const decrement=(e)=>{
        action(count-1);
    }


    return (
        <div className="row">
            <div className="col">
                <button className="btn btn-primary" onClick={increment}>Increment</button>&nbsp;
                <button className="btn btn-primary" onClick={decrement}>Decrement</button>
                &nbsp;&nbsp;<label>{count}</label>

            </div>
        </div>
    );
}
export default Counter;
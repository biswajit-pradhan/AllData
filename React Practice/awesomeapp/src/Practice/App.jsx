import React from "react";
import ExceptYou from "./ExceptYou";
import You from './You';


const value="yo"

function App() {
    return (
        <>
            <h1>Top Netflix Suggestions</h1>
            {(value==="you")?<You/>:<ExceptYou/>}
        </>
    );
}
export default App;
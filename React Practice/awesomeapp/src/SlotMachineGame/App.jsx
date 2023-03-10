import React from "react";
import "./index.css"
import SlotM from './SlotM';

const App=()=>{
    return <>
        <h1 className="heading_style">
        π°Welcome to <span style={{fontWeight: "bold"}}>Slot Machine Game</span>π°</h1>
        <div className="slotmachine">
            <SlotM x="π" y="π" z="π"/>
            <SlotM x="π" y="π₯" z="π"/>
            <SlotM x="π" y="π" z="π"/>
        </div>
    </>
}
export default App;
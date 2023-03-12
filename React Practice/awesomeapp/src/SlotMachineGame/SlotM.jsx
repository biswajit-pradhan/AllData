import React from "react";
import "./index.css"
import IfSlotM from './IfSlotM';
import ElseSlotM from './ElseSlotM';

const SlotM=(props)=>{
    let {x,y,z}=props;

    if(x===y && y===z){
        return <IfSlotM x={x} y={y} z={z}/>
    }else{
        return <ElseSlotM x={x} y={y} z={z}/>
    }
}
export default SlotM;
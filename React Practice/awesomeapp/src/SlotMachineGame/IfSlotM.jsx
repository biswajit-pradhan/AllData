import "./index.css";

const IfSlotM=(props)=>{

    let {x,y,z}=props;

    return <>
    <div className="slot_inner">
        <h1>{x} {y} {z}</h1>
        <h1>This is matching</h1>
        <hr/>
    </div>
</>
}
export default IfSlotM;
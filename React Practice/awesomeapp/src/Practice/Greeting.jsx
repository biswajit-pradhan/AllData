import "./index.css";

function Greeting(){
    const date=new Date();
    const hours=date.getHours();
    let greeting='';
    let cssData={};
    
    if(hours>=1 && hours<12){
        greeting="Good Morning";
        cssData.color="green";
    }else if(hours>=12 && hours<20){
        greeting="Good Afternoon";
        cssData.color="orange";
    }else{
        greeting="Good Night";
        cssData.color="black";
    }
    return (
        <>
            <h1>Hello Sir, <span style={cssData}>{greeting}</span></h1>
        </>
    );
}
export default Greeting;
import React from "react";
function add(a,b){
    return (
        <>
            <h1>Sum of {a} and {b} is {a+b}</h1>
        </>
    )
}
function sub(a,b){
    return (
        <>
            <h1>Sub of {a} and {b} is {a-b}</h1>
        </>
    )
}
function mul(a,b){
    return (
        <>
            <h1>Multiplication of {a} and {b} is {a*b}</h1>
        </>
    )
}
function div(a,b){
    return (
        <>
            <h1>Division of {a} and {b} is {(a/b).toFixed(2)}</h1>
        </>
    )
}
export default add;
export {sub,mul,div,add};
import { useState } from "react";

const Textbox=(props)=>{

    const userObj={
        username:"",
        password:"",
        age:"",
        gender:""//radiobutton
    }
    const [user,updateDetails]=useState(userObj);
    
    const updateUserDetails=(e)=>{
        console.log(e.target.value);
        let tempuser={...user};
        tempuser[e.target.name]=e.target.value;
        updateDetails(tempuser);
        props.update(tempuser)
    }

    return(
        <div className="row">
            <div className="mb-3">
                <label for="formGroupExampleInput"
                className="form-label">User Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" name="username" onChange={updateUserDetails} placeholder="Enter user name"/>
            </div>
            <div className="mb-3">
                <label for="password"
                className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={updateUserDetails} placeholder="Enter password"/>
            </div>
            <div className="mb-3">
                <label for="age"
                className="form-label">Age</label>
                <input type="number" className="form-control" id="age" name="age" onChange={updateUserDetails} placeholder="Enter Age"/>
            </div>
            <div className="col-sm-3">
                <input type="radio" name="gender" value="M" onChange={updateUserDetails}/> Male&nbsp;&nbsp;
                <input type="radio" name="gender" value="F" onChange={updateUserDetails}/> Female&nbsp;&nbsp;
                <input type="radio" name="gender" value="O" onChange={updateUserDetails}/> Other&nbsp;&nbsp;
            </div>
            <h4>{JSON.stringify(user)}</h4>
        </div>
       
    )
}
export default Textbox;
import "./style.css"
import { useFormik } from "formik"
import { Component } from "react";
import loginSchema from "./loginSchema";

export default class Login extends Component{

    constructor(props){
        super(props);
        const initialValues={
            "name": "",
            "price":"",
            "version":"",
            "authorName":""
        }
        const {values,touched,errors,handleBlur,handleSubmit,handleChange}=useFormik({
            initialValues:initialValues,
            validationSchema:loginSchema,
            onSubmit:(value,action)=>{
                console.log(values);
                alert("Book Added Successfully");
                action.resetForm();
            }
        })
    }


    render() {
        return(
            <div class="login-box">
            <h2>Login</h2>
            <form>
                <div class="user-box">
                    <input type="text" name="" required=""/>
                        <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="password" name="" required=""/>
                        <label>Password</label>
                </div>
                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
        )
    }
}
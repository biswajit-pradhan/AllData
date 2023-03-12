import { Component } from "react";

export default class Signup2 extends Component{
    constructor(){
        super();
        this.state={
            user:{
                name:'',
                age:0,
                gender:'',
                email:'',
                password:''
            }
        }
    }
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <h1>Sign Up Practice</h1>
                <label>Enter Name</label>
                <input name="name" value={this.state.name} onChange={this.changeHandler} type="text" />
                <br/><br/>
                <label>Enter Age</label>
                <input name="age" value={this.state.age} onChange={this.changeHandler} type="number" />
                <br/><br/>
                <label>Enter Gender</label>
                <input name="gender" value={this.state.gender} onChange={this.changeHandler} type="text" />
                <br/><br/>
                <label>Enter Email</label>
                <input name="email" value={this.state.email} onChange={this.changeHandler} type="text" />
                <br/><br/>
                <label>Enter Password</label>
                <input name="password" value={this.state.password} onChange={this.changeHandler} type="password" />
                <br/><br/>
                <button onClick={this.onSave}>Save</button>
            </div>
        )
    }

    changeHandler=(event)=>{
        this.setState({
            user:{
                ...this.state.user,
                [event.target.name]:event.target.value
            }
        })
    }

    onSave=()=>{
        console.log(this.state.user);
    }
}
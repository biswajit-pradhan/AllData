import { Component } from "react";

export default class Arry extends Component{
    
    i=1;
    
    constructor(){
        super();
        // console.log('In constructor');
        this.state={
            nums:[5,2,7,1,3,8,9,4],
        }
    }
    
    render(){
        return (
            <div>
                <h1>Array Elements</h1>
                {
                    this.state.nums.map(e=>(
                        <li key={this.i++}>{e}</li>
                        ))
                }
                <br/>
                <button onClick={()=>(this.sortArray('ASC'))}>Sort-ASC</button>
                <button onClick={()=>(this.sortArray('DESC'))}>Sort-DESC</button>
            </div>
        )
    }

    sortArray(direction){
        let temp=[];
        switch(direction){
            case 'ASC':
                temp=this.state.nums.sort((a,b)=>a-b);
                break;
            case 'DESC':
                temp=this.state.nums.sort((a,b)=>b-a);
                break;
            default:
                break;
        }
        this.setState({
            nums:temp
        });
    }
}
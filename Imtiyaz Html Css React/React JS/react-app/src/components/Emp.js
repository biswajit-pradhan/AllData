import { Component } from "react";

export default class Emp extends Component{

    constructor(){
        super();
        this.state={
            employees:[]
        }
    }

    // LifeCyle Hooks
    componentDidMount(){
        let e1={
            id:1,
            name:'Harry Potter',
            salary:85000,
            city:'London'
        };
        let e2={
            id:2,
            name:'Ronald Wisley',
            salary:75000,
            city:'Kent'
        };
        let e3={
            id:3,
            name:'Hermione Granger',
            salary:95000,
            city:'London'
        };
        let temp=[e1,e2,e3];
        this.setState({
            employees:temp
        });

    }

    render(){
        return (
            <div>
                <h3>Employee List</h3>
                {
                    this.state.employees.map((e)=>(
                        <div key={e.id}>
                            ID:{e.id}<br/>
                            Name:{e.name}<br/>
                            Salary:{e.salary}<br/>
                            City:{e.city}<br/><br/>
                        </div>
                    ))
                    // {posts.map((post, index) => <Post details={post} key={index} />)}
                    
                    
                }
                <br/>
                <button onClick={()=>(this.sortArray('ASC'))}>Sort as per the Salary-ASC</button>
                <button onClick={()=>(this.sortArray('DESC'))}>Sort as per the Salary-DESC</button>
            </div>
        )
    }

    sortArray(direction){
        let temp=[];
        switch(direction){
            case 'ASC':
                temp=this.state.employees.sort((a,b)=>a.salary-b.salary);
                break;
            case 'DESC':
                temp=this.state.employees.sort((a,b)=>b.salary-a.salary);
                break;
            default:
                break;
        }
        this.setState({
            employees:temp
        });
    }
}
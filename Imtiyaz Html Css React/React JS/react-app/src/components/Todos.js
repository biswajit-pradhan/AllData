import axios from "axios";
import { Component} from "react";

export default class Todos extends Component{
    constructor(props){
        super(props);

        this.state={
            todos:[]
        }
    }
    componentDidMount(){
        this.getTodos();
        // this.props.getAllTodos();
    }
    render(){
        return (
            <div>
                <h1>Todo List</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(t => (
                                <tr key={t.id}>
                                    <th scope="row">{t.userId}</th>
                                    <td>{t.id}</td>
                                    <td>{t.title}</td>
                                    <td>{t.completed.toString()}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            
        )
    }
    async getTodos(){
        try{
            const response=(await axios.get('https://jsonplaceholder.typicode.com/todos')).data;
            console.log(response);
            this.setState({
                todos:response
            })
        }catch(error){
            console.error(error);
        }
    }
}
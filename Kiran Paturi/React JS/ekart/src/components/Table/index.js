import axios from "axios";
import { useEffect, useState } from "react";
import "./tablecss.css"

const Table=()=>{

    const [info,setInfo]=useState([{id:"",name:""}]);
    useEffect(()=>{
        const getInfo=async()=>{
            try{
                const response=await axios.get('/api/book/getallbooks');
                setInfo(response.data);
                console.log(response.data)
            }
            catch(ex){
                console.log(ex);
            }
        }
        getInfo();
    },[])
    const bindInfo=()=>{
        return info.map((item,index)=>{
            return <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.authorName}</td>
                <td>{item.price}</td>
                <td>{item.version}</td>
            </tr>
        })
    }
    return (
        <table className="table">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Author Name</th>
                <th>Price</th>
                <th>Version</th>
            </thead>
            <tbody>
                {bindInfo()}
            </tbody>
        </table>
    )
}
export default Table;
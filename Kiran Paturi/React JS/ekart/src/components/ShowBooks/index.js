import axios from "axios";
import { useEffect, useState } from "react";

const ShowBooks=()=>{

    const [book,setBooks]=useState([{
        id:"",
        name:"",
        price:"",
        version:"",
        authorName:""
    }]);

    useEffect(()=>{

        const getBooks=async()=>{
            try{
                let response=(await axios.get("api/book/getallbooks")).data;
                setBooks(response);
            }catch(ex){
                alert(ex.message)
            }
        };
        getBooks();
        
    },[])
    return (
        <div>
            <table className="table table-dark table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">BOOK ID</th>
                        <th scope="col">BOOK NAME</th>
                        <th scope="col">PRICE</th>
                        <th scope="col">VERSION</th>
                        <th scope="col">AUTHOR NAME</th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((item, index) =>(
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.version}</td>
                                <td>{item.authorName}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ShowBooks;
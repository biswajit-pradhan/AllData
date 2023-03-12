import { useFormik } from "formik"
import { useState } from "react"
import { addBookSchema } from "../../schemas"
import axios from 'axios';

const AddBook = () => {

    //define your post object
    const bookObj = {
        "name": "",
        "price":0,
        "version":0,
        "authorName":""
    }

    const initialValues={
        "name": "",
        "price":"",
        "version":"",
        "authorName":""
    }
    //set your state
    const [book, setBookDetails] = useState(bookObj);
    
    const {values,touched,errors,handleBlur,handleSubmit,handleChange}=useFormik({
        initialValues:initialValues,
        validationSchema:addBookSchema,
        onSubmit:(value,action)=>{
            // console.log(values);
            savebook();
            alert("Book Added Successfully");
            action.resetForm();
        }
    })
    // console.log(errors);
    // console.log(Formik);
    
    // Save the data to the databse by calling the api
    const savebook = ()=>{
        console.log(book);
        axios.post('/api/book/addbook',book).then(result=>{
            console.log(result);
        }).catch((ex)=>{
            console.log(ex);
        });
        // alert("Book Added Successfully");
    }
   
    //collect the data from the page
    const updateBook = (e) => {
        let tempBook = { ...book };
        if (e.target.id === 'name') {
            tempBook.name = e.target.value;
        } else if (e.target.id === 'price') {
            tempBook.price = e.target.value;
        }else if (e.target.id === 'version') {
            tempBook.version = e.target.value;
        }else if (e.target.id === 'authorName') {
            tempBook.authorName = e.target.value;
        }else {
            tempBook[e.target.id] = e.target.value;
        }
        setBookDetails(tempBook);
    }
    
    //To call 2 methods at a time from onChange
    const handleBook=(event)=>{
        updateBook(event);
        handleChange(event);
        // console.log("handleBook called..");
    }

    return(
        <div className="mt-5">
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Name</label>
                <div className="col-sm-6">
                    <input type="text" 
                    className="form-control" 
                    id="name" 
                    name="name"
                    value={values.name}
                    onChange={handleBook} 
                    onBlur={handleBlur}/>
                    {errors.name && touched.name ? (<p className="form-error" style={{color: "red"}}>
                        {errors.name}</p>):
                        null}
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-6">
                    <input type="number" 
                    className="form-control" 
                    id="price" 
                    name="price"
                    value={values.price}
                    onChange={handleBook} 
                    onBlur={handleBlur} />
                    {errors.price && touched.price ? (<p className="form-error" style={{color: "red"}}>
                        {errors.price}</p>):
                        null}
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Version</label>
                <div className="col-sm-6">
                    <input type="number" 
                    className="form-control" 
                    id="version" 
                    name="version" 
                    value={values.version}
                    onChange={handleBook} 
                    onBlur={handleBlur} />
                    {errors.version && touched.version ? (<p className="form-error" style={{color: "red"}}>
                        {errors.version}</p>):
                        null}
                </div>
            </div>
            <div className="row mb-3">
                <label className="col-sm-2 col-form-label">Author Name</label>
                <div className="col-sm-6">
                    <input type="text" 
                    className="form-control" 
                    id="authorName" 
                    name="authorName"
                    value={values.authorName}
                    onChange={handleBook} 
                    onBlur={handleBlur} />
                    {errors.authorName && touched.authorName ? (<p className="form-error" style={{color: "red"}}>
                        {errors.authorName}</p>):
                        null}
                </div>
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSubmit}>AddBook</button>
        </div>
    )
}

export default AddBook;
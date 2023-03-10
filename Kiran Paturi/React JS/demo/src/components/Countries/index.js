import axios from "axios";

const { useEffect, useState } = require("react");

const Countries=()=>{
    const [countryList,setCountryList]=useState([{
        name:"",
        alpha2Code:""
    }]);
    const [selectedCountry,chooseCountry]=useState("");
    useEffect(()=>{
        // fetch('https://restcountries.com/v2/all')
        // .then(result=>{
        //     return result.json()
        // })
        // .then((data)=>{
        //     setCountryList(data);
        // })
        // .catch(ex=>{
        //     console.log(ex);
        // })
        // axios.get('https://restcountries.com/v2/all')
        // .then(response=>{
        //     setCountryList(response.data);
        // })
        const getCountries=async()=>{
           try{
            let response=await axios.get('/api/book/getallbooks');
            setCountryList(response.data);
            console.log(response.data);
           }
           catch(ex){
            console.log(ex);
           }
        };
        getCountries();
    },[]);

    const bindCountries=()=>{
        return countryList.map((item,index)=>{
            return <option value={item.alpha2Code}>
                {item.name}
            </option>
        })
    }
    return (
        <div className="form-group">
            <select className="form-control"
            onChange={(e)=>{
                chooseCountry(e.target.value);
            }}>
                <option name="">Select Country</option>
                {bindCountries()}
            </select>
            {selectedCountry}
                
                
        </div>
    )
}
export default Countries;
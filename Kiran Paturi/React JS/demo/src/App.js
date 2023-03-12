import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Details from "./components/Details";
import Counter from "./components/Counter";
import Textbox from "./components/Textbox";
import { useState } from "react";
import Display from "./components/Display";
import Toggle from "./components/Toggle";
import Dropdown from "./components/Dropdown";
import Countries from "./components/Countries";

const App=()=>{

  // const companyName="Capgemini";
  // const address="India";
  // const emailAddress="Careers@capgemini.com";

  // const [personalInfo, updateUserInfo] = useState({});
  // const [selectedGender, selectGender] = useState("");
  // const [selectedCountry, selectCountry] = useState("");
  
  // const countryList = [{
  //   value: "IN",
  //   text: "India"
  // },
  // {
  //   value: "USA",
  //   text: "United States of America"
  // }];

  // const genderList = [{
  //   value: "M",
  //   text: "Male"
  // },
  // {
  //   value: "F",
  //   text: "Female"
  // },
  // {
  //   value: "O",
  //   text: "Others"
  // }
  // ];
  // const countrySelect = (data) => {
  //   selectCountry(data);
  // }
  // const genderSelect = (data) => {
  //   selectGender(data);
  // }
  // const genderDropdown = {
  //   className:'form-control',
  //   name:'gender',
  //   dataList:genderList,
  //   selected: genderSelect
  // }
  // const countryDropdown = {
  //   className:'form-control',
  //   name:'country',
  //   dataList:countryList,
  //   selected: countrySelect
  // }
 
  // const fetchUpdates = (data) => {
  //   updateUserInfo(data);//update state object 
  // }


  return (
  <div className="container">
    {/* <Header company={companyName} location={address}/>
    <h1>Content</h1> */}

    <div className="row">
      <div className="col-md-3">
        <Countries/>
      </div>
    </div>
    
    {/* <div>
        <Dropdown dropdown ={genderDropdown}/>
        <Dropdown dropdown={countryDropdown} />
        <div>
          <h6>Gender :{selectedGender}</h6>
          <h6>Country :{selectedCountry}</h6>
        </div>

      </div> */}

    {/* <Dropdown /> */}

    {/* <Counter/>
    <div>
      <Toggle/>
    </div>
    <div>
      <Textbox update={fetchUpdates}/>
      <Display display={personalInfo}/>
    </div>
    <Table/>
    <Details/>
    <Footer email={emailAddress}/> */}
    
  </div>
  )
}
export default App;
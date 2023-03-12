// import Countries from "./components/Countries";
// import Table from "./components/Table";
import './App.css';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import SearchBar from './components/SearchBar';
// import ShowBooks from './components/ShowBooks';
// import Register from "./components/register";
// import AddBook from "./components/AddBook";
import Login from './components/Login';
// import SignUp from './components/SignUp';

const App=()=>{
  return(
    <div className='container'>
      <div className='row'>
        {/* <div className='col-md-3'>
          <Countries/>
        </div> */}
        {/* <Table/> */}
        {/* <Register/> */}
        {/* <AddBook/> */}
        <Login/>
        {/* <SignUp/> */}
        {/* <SearchBar/> */}
        {/* <ShowBooks/> */}
        {/* <Home/> */}
        {/* <Navbar/> */}
      </div>
    </div>
  )
}
export default App;
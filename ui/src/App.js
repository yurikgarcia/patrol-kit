import "./App.css";
import React, { useEffect } from "react";
// import AppContext from './components/AppContext.js';
import Home from ".//components/Routes/Home.js";
import EditQRC from ".//components/Routes/EditQRC.js";
import SFS45_Patrick from "./components/Units/SFS45_Patrick.js";
import SFS45_PatrickQRCList from "./components/Routes/SFS45_PatrickQRCList.js";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav.js";
import { Outlet } from 'react-router-dom';
import SelectedQRC from "./components/Routes/SelectedQRC.js";


function App() {


  

  // const API = {
  //   website: 'http://shelfapi-env.eba-phxch2is.us-gov-west-1.elasticbeanstalk.com' 
  // };

  // use for local developing
  // const API = {
  //   website: 'http://localhost:3000'
  // };

  useEffect(() => {
    //used to test and remove token and will be used in a logout button **wink wink**
    // console.log(localStorage.removeItem("authorization"))
  }, []);

  const NavBarLayout = () => (
    <>
    {/* <Nav /> */}
      <Outlet />
    </>
  );
//testttttt
  return (

    <Router>
        <Nav/>
        <Routes>
          <Route element={<NavBarLayout />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/editQRC" element={<EditQRC />} />
          <Route path="/units" element={<SFS45_Patrick />} />
          <Route path="/unitQRCList" element={<SFS45_PatrickQRCList />} />
          <Route path="/selectedQRC" element={<SelectedQRC />} /> 
        </Routes>
    </Router>
  );
}


export default App;

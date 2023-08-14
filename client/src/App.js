//import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
// import { MyNavBar } from './Components/navbar';
// import API from './API/API';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import './App.css';
import DefaultRoute from './Components/Routes/Routes';
// import { useEffect } from 'react';

function App() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [menuShow, setMenuShow] = useState(false); //This is used to show the login modal
  // const [loggedIn, setLoggedIn] = useState(false); //Need to be changed to false whene login is implemented
  // const [somethingToShow, setSomethingToShow] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  
  // const getCourses = async () => {
  //   try {
  //     const courses = await API.loadCourseList("/courses");
  //     setCourses(courses.courseList);
  //   } catch (error) {
  //     setErrorMessage(error);
  //   }
  // }

  // useEffect( () => {
  //   console.log(selectedDestination);
  // }, [selectedDestination]);
  const path1 = {
    "pathId": "34_1",
    "hopsNumber": 7,
    "hops": "hop1 hop2 hop3 hop4",
    "timestamp": "2021-05-01T00:00:00.000Z",
    "isolatedDomains": "domain1 domain2 domain3",
    "avg_latency": "55.940333333333335ms",
    "avg_bandwidth_cs_64": "4.97Mbps",
    "avg_bandwidth_sc_64": "7.02Mbps",
    "avg_bandwidth_cs_MTU": "32.00Mbps",
    "avg_bandwidth_sc_MTU": "3.36Mbps",
    "avg_loss": "23.0%",
  }

  const path2 = {
    "pathId": "35_12",
    "hopsNumber": 7,
    "hops": "hop1 hop2 hop3 hop4",
    "timestamp": "2021-05-01T00:00:00.000Z",
    "isolatedDomains": "domain1 domain2 domain3",
    "avg_latency": "55.940333333333335ms",
    "avg_bandwidth_cs_64": "4.97Mbps",
    "avg_bandwidth_sc_64": "7.02Mbps",
    "avg_bandwidth_cs_MTU": "32.00Mbps",
    "avg_bandwidth_sc_MTU": "3.36Mbps",
    "avg_loss": "23.0%",
  }

  const path3 = {
    "pathId": "4_3",
    "hopsNumber": 7,
    "hops": "hop1 hop2 hop3 hop4",
    "timestamp": "2021-05-01T00:00:00.000Z",
    "isolatedDomains": "domain1 domain2 domain3",
    "avg_latency": "55.940333333333335ms",
    "avg_bandwidth_cs_64": "4.97Mbps",
    "avg_bandwidth_sc_64": "7.02Mbps",
    "avg_bandwidth_cs_MTU": "32.00Mbps",
    "avg_bandwidth_sc_MTU": "3.36Mbps",
    "avg_loss": "23.0%",
  }
  
  const pathsList = [path1, path2, path3];
  return (
    <Container fluid className='App'>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/login' element={}/> */}
          <Route path='*' element={<DefaultRoute pathsList={pathsList} selectedDestination={selectedDestination} setSelectedDestination={setSelectedDestination} menuShow={menuShow} setMenuShow={setMenuShow}/>}/>
          {/* <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
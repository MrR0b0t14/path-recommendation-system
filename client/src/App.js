//import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
// import { MyNavBar } from './Components/navbar';
import API from './API/API';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';
import DefaultRoute from './Components/Routes/Routes';
// import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [menuShow, setMenuShow] = useState(false); //This is used to show the login modal
  const [pathsList, setPathsList] = useState([]); //This is used to store the paths list
  const [destinationsList, setDestinationsList] = useState([]); //This is used to store the destinations list

  const [errorMessage, setErrorMessage] = useState('');
  
  const getPaths = async () => {
    try {
      const encodedHopValue = encodeURIComponent(selectedDestination);
      const destinations = await API.loadDestinationList();
      const paths = await API.loadPathsList(`/${encodedHopValue}`);
      setDestinationsList(destinations);
      setPathsList(paths);    
    } catch (error) {
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    getPaths();
    console.log(pathsList);
    console.log(destinationsList);
  }, [destinationsList]);
  
  return (
    <ThemeProvider theme={darkTheme}>
    <Container fluid className='App'>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/login' element={}/> */}
          <Route path='*' element={<DefaultRoute destinationsList={destinationsList} setDestinationsList={setDestinationsList} pathsList={pathsList} setPathsList={setPathsList} selectedDestination={selectedDestination} setSelectedDestination={setSelectedDestination} menuShow={menuShow} setMenuShow={setMenuShow}/>}/>
          {/* <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
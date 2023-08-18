 //import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
// import { MyNavBar } from './Components/navbar';
import API from './API/API';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import DefaultRoute from './Components/Routes/Routes';
// import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#006494',
      dark: '#004667',
      light: '#3383a9',
    },
    secondary: {
      main: "#CE93D8",
      dark: "#AB47BC",
      light: "#f3e5f5",
    }
  },
});
function App() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [menuShow, setMenuShow] = useState(false); //This is used to show the login modal
  const [pathsList, setPathsList] = useState([]); //This is used to store the paths list
  const [destinationsList, setDestinationsList] = useState([]); //This is used to store the destinations list
  const [form, setForm] = useState({
    destination: '',
    minLatency: '',
    maxLatency: '',
    minBandwidthUpstream: '',
    maxBandwidthUpstream: '',
    minBandwidthDownstream: '',
    maxBandwidthDownstream: '',
    minPacketLoss: '',
    maxPacketLoss: '',
    maxNumberOfHops: '',
    isdsToAvoid: '',
  }); //This is used to store the form data

  const [showCode, setShowCode] = useState(false); //This is used to show the code of the selected path
  const [selectedCodeBlock, setSelectedCodeBlock] = useState({
    destination: '',
    hopsSequence: '',
  }); //This is used to store the code of the selected path
  const [unfinished, setUnfinished] = useState(true); //This is used to check the chargement status

  const [errorMessage, setErrorMessage] = useState('');
  
  const getPaths = async () => {
    try {
      const destinations = await API.loadDestinationList();
      const paths = await API.loadPathsList();
      setDestinationsList(destinations);
      setPathsList(paths);    
      setUnfinished(false);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  useEffect(() => {
    getPaths();
  }, []);
  
  return (
    <ThemeProvider theme={darkTheme}>
    <Container fluid className='App'>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/login' element={}/> */}
          <Route path='*' element={<DefaultRoute unfinished={unfinished} setUnfinished={setUnfinished} selectedCodeBlock={selectedCodeBlock} setSelectedCodeBlock={setSelectedCodeBlock} showCode={showCode} setShowCode={setShowCode} form={form} setForm={setForm} destinationsList={destinationsList} setDestinationsList={setDestinationsList} pathsList={pathsList} setPathsList={setPathsList} selectedDestination={selectedDestination} setSelectedDestination={setSelectedDestination} menuShow={menuShow} setMenuShow={setMenuShow}/>}/>
          {/* <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
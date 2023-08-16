// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Row, } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
// // import { useNavigate } from "react-router-dom";
// import { GrNetwork } from "react-icons/gr";
// import API from "../API/API";
// import {TiThMenu} from "react-icons/ti";
import { TextField, Button, Box, Divider, Chip, Typography, SwipeableDrawer, IconButton} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TuneIcon from '@mui/icons-material/Tune';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function PathRecommendationForm(props){
    return(
        <>
        <Box className='mt-5' sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} component='form'>
            <div className='px-3 d-flex justify-content-center'>
                <Typography className='mx-5' sx={{fontSize: 24}} variant="button" color='secondary' display="block" gutterBottom>
                    Filter Your Paths
                </Typography>
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{fontWeight: 'bold'}} label="Latency" className='font-weight-bold'/>
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="In ms (e.g 25 means 25ms)" color='secondary' id="outlined-basic" label="min. Latency" variant="outlined" />
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="In ms (e.g 25 means 25ms)" color='secondary' id="outlined-basic" label="max. Latency" variant="outlined" />
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{fontWeight: 'bold'}} label="Bandwidth Upstream" className='font-weight-bold'/>
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="In Mbps (e.g 25 means 25Mbps)" color='secondary' id="outlined-basic" label="min. Bandwidth Upstream" variant="outlined" />
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="In Mbps (e.g 25 means 25Mbps)" color='secondary' id="outlined-basic" label="max. Bandwidth Upstream" variant="outlined" />
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{fontWeight: 'bold'}} label="Bandwidth Downstream" className='font-weight-bold'/>
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="In Mbps (e.g 25 means 25Mbps)" color='secondary' id="outlined-basic" label="min. Bandwidth Downstream" variant="outlined" />
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="In Mbps (e.g 25 means 25Mbps)" color='secondary' id="outlined-basic" label="max. Bandwidth Downstream" variant="outlined" />
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{fontWeight: 'bold'}} label="Loss" className='font-weight-bold'/>
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="In % (e.g 0.5 means 0.5%)" color='secondary' id="outlined-basic" label="min. Loss" variant="outlined" />
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="In % (e.g 0.5 means 0.5%)" color='secondary' id="outlined-basic" label="max. Loss" variant="outlined" />
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{fontWeight: 'bold'}} label="More" className='font-weight-bold'/>
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="(e.g 5)" color='secondary' id="outlined-basic" label="Maximun Number of Hops:" variant="outlined" />
                <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} placeholder="(e.g 16, 19)" color='secondary' id="outlined-basic" label="ISDs to avoid" variant="outlined" />
            </div>
            <div className='px-3 d-flex justify-content-center'>
                <Button color='secondary' variant="outlined" endIcon={<TuneIcon/>}>Filter</Button>
            </div>
        </Box>
        </>
    )
}

function FormDrawer(props){
    
    const setMenuShow = props.setMenuShow;
    const menuShow = props.menuShow;

    const toggleDrawer = (open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setMenuShow(open);
    };

    return (
        <>
            <React.Fragment key='left'>
                <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    open={menuShow}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    <PathRecommendationForm/>
                </SwipeableDrawer>  
            </React.Fragment>      
        </>
    );
}


export default FormDrawer;
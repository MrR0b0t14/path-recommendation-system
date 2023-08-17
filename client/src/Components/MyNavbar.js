// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {AppBar, Toolbar, Typography,} from '@mui/material';
import RouteIcon from '@mui/icons-material/Route';
import FormDrawer from './pathRecommendationForm';

import React from 'react';


function MyNavbar(props){
    const setMenuShow = props.setMenuShow;
    const menuShow = props.menuShow;
    const form = props.form;
    const setForm = props.setForm;
    const pathsList = props.pathsList;
    const setPathsList = props.setPathsList;

    return (
        <Container className='p-0' fluid>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <div style={{marginRight: "27.5%"}} className='mr-5 d-flex justify-content-center align-items-center'>
                        <FormDrawer destinationsList={props.destinationsList} setDestinationsList={props.setDestinationsList} selectedDestination={props.selectedDestination} setSelectedDestination={props.setSelectedDestination} pathsList={pathsList} setPathsList={setPathsList} form={form} setForm={setForm} menuShow={menuShow} setMenuShow={setMenuShow}/>
                        <Typography variant="button" color="secondary" component="div">
                            <b>Path-Recommendation System</b><RouteIcon/>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </Container>
    );
}

export default MyNavbar;
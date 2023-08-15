// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Dropdown, DropdownButton, Button, InputGroup, Form, Row, Col} from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
// // import { useNavigate } from "react-router-dom";
// import { GrNetwork } from "react-icons/gr";
// import API from "../API/API";
// import {TiThMenu} from "react-icons/ti";
import { TextField} from '@mui/material';

function PathRecommendationForm(props){
    return (
        <>
            <Row>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} placeholder="In ms (e.g 25ms)" color='secondary' id="outlined-basic" label="min. Latency" variant="outlined" />
                </InputGroup>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} placeholder="In ms (e.g 25ms)" color='secondary' id="outlined-basic" label="max. Latency" variant="outlined" />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} placeholder="In Mbps (e.g 25Mbps)" color='secondary' id="outlined-basic" label="min. Bandwidth Downstream" variant="outlined" />
                </InputGroup>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} placeholder="In Mbps (e.g 25Mbps)" color='secondary' id="outlined-basic" label="max. Bandwidth Downstream" variant="outlined" />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} placeholder="In Mbps (e.g 25Mbps)" color='secondary' id="outlined-basic" label="min. Bandwidth Upstream" variant="outlined" />
                </InputGroup>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} placeholder="In Mbps (e.g 25Mbps)" color='secondary' id="outlined-basic" label="max. Bandwidth Upstream" variant="outlined" />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} placeholder="(e.g 0.5%)" color='secondary' id="outlined-basic" label="min. Loss" variant="outlined" />
                </InputGroup>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} placeholder="(e.g 0.5%)" color='secondary' id="outlined-basic" label="max. Loss" variant="outlined" />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <TextField InputLabelProps={{style: { fontWeight: 'bold' }}} type='number' placeholder="(e.g 5)" color='secondary' id="outlined-basic" label="Maximun Number of Hops:" variant="outlined" />
                </InputGroup>
            </Row>
        </>
    );
}


export default PathRecommendationForm;
// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Dropdown, DropdownButton, Button, InputGroup, Form, Row, Col} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from "react-router-dom";
import { GrNetwork } from "react-icons/gr";
// import API from "../API/API";
import {TiThMenu} from "react-icons/ti";

function PathRecommendationForm(props){
    return (
        <>
            <Row>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <InputGroup.Text id="basic-addon1">min. Latency</InputGroup.Text>
                    <Form.Control
                    placeholder="Latency in ms (e.g 25ms)"
                    aria-label="minLatency"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <InputGroup.Text id="basic-addon1">max. Latency</InputGroup.Text>
                    <Form.Control
                    placeholder="Latency in ms (e.g 25ms)"
                    aria-label="maxLatency"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <InputGroup.Text id="basic-addon1">min. Bandwidth</InputGroup.Text>
                    <Form.Control
                    placeholder="Bandwidth in Mbps (e.g 25Mbps)"
                    aria-label="minBw"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <InputGroup.Text id="basic-addon1">max. Bandwidth</InputGroup.Text>
                    <Form.Control
                    placeholder="Bandwidth in Mbps (e.g 25Mbps)"
                    aria-label="maxBw"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <InputGroup.Text id="basic-addon1">min. Loss</InputGroup.Text>
                    <Form.Control
                    placeholder="Loss % (e.g 0.5%)"
                    aria-label="minLoss"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <InputGroup.Text id="basic-addon1">max. Loss</InputGroup.Text>
                    <Form.Control
                    placeholder="Loss % (e.g 0.5%)"
                    aria-label="maxLoss"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup style={{'width':'40%'}} className="m-2">
                    <InputGroup.Text id="basic-addon1">Maximun Number of Hops:</InputGroup.Text>
                    <Form.Control 
                    type="number"
                    placeholder="Max Number of Hops (e.g 5)"
                    aria-label="maxNumHops"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </Row>
        </>
    );
}


export default PathRecommendationForm;
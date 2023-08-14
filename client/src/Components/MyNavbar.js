// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Dropdown, DropdownButton, Button} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import { useNavigate } from "react-router-dom";
import { GrNetwork } from "react-icons/gr";
// import API from "../API/API";
import {TiThMenu} from "react-icons/ti";

function MyNavbar(props){
    const setMenuShow = props.setMenuShow;
    const menuShow = props.menuShow;
    return (
        <Container className='p-0' fluid>
            <Navbar expand="xxl" variant="light" bg="warning">
                <Container className='m-0 mw-100 '>
                    <Button className="btn btn-sm btn-link bg-transparent" style={{'color': 'black'}} variant='dark' onClick={() => setMenuShow(!menuShow)}><TiThMenu size={25}/></Button>
                    <Navbar.Brand expand="xxl"><b>Path-Recommendation System</b><GrNetwork/></Navbar.Brand>
                    <DropdownChanging selectedDestination={props.selectedDestination} setSelectedDestination={props.setSelectedDestination}/>
                </Container>
            </Navbar>
        </Container>
    );
}

function DropdownChanging(props){
    const setSelectedDestination = props.setSelectedDestination;
    const selectedDestination = props.selectedDestination;

    const handleSelect = (eventKey) => {
        setSelectedDestination(eventKey);
        
      };

    return(
        <DropdownButton variant='dark' onSelect={handleSelect}
            title={selectedDestination === "" ? "Select a destination" : selectedDestination}
            id="destinations-dropdown"
            >
            <Dropdown.Item eventKey="Destination 1">Destination 1</Dropdown.Item>
            <Dropdown.Item eventKey="Destination 2">Destination 2</Dropdown.Item>
            <Dropdown.Item eventKey="Destination 3">Destination 3</Dropdown.Item>
        </DropdownButton>
    );
}

export default MyNavbar;
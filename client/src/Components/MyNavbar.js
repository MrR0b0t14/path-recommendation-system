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
    const destinationsList = props.destinationsList;
    const setDestinationsList = props.setDestinationsList;

    return (
        <Container className='p-0' fluid>
            <Navbar expand="xxl" variant="light" bg="warning">
                <Container className='m-0 mw-100 '>
                    <Button className="btn btn-sm btn-link bg-transparent" style={{'color': 'black'}} variant='dark' onClick={() => setMenuShow(!menuShow)}><TiThMenu size={25}/></Button>
                    <Navbar.Brand expand="xxl"><b>Path-Recommendation System</b><GrNetwork/></Navbar.Brand>
                    <DropdownChanging destinationsList={destinationsList} setDestinationsList={setDestinationsList} selectedDestination={props.selectedDestination} setSelectedDestination={props.setSelectedDestination}/>
                </Container>
            </Navbar>
        </Container>
    );
}

function DropdownChanging(props){
    const setSelectedDestination = props.setSelectedDestination;
    const selectedDestination = props.selectedDestination;
    const destinationsList = props.destinationsList;

    const handleSelect = (eventKey) => {
        setSelectedDestination(eventKey);  
      };

    return(
        <DropdownButton variant='dark' onSelect={handleSelect}
            title={selectedDestination === "" ? "Select a destination" : selectedDestination}
            id="destinations-dropdown"
            >
                <Dropdown.Item className={selectedDestination === "" ? "default-dropdown-item" : "fixed-width-dropdown-item"} eventKey={""}>
                    All Destinations
                </Dropdown.Item>
            {
                destinationsList.map((d) => 
                <Dropdown.Item key={d} className="default-dropdown-item" eventKey={d}>{d}</Dropdown.Item>)
            }
        </DropdownButton>
    );
}

export default MyNavbar;
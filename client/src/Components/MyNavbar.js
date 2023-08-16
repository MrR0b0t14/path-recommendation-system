// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Dropdown, DropdownButton} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {AppBar, Toolbar, Typography} from '@mui/material';
import RouteIcon from '@mui/icons-material/Route';
import FormDrawer from './pathRecommendationForm';

function MyNavbar(props){
    const setMenuShow = props.setMenuShow;
    const menuShow = props.menuShow;
    const destinationsList = props.destinationsList;
    const setDestinationsList = props.setDestinationsList;

    return (
        <Container className='p-0' fluid>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <FormDrawer menuShow={menuShow} setMenuShow={setMenuShow}/>
                    <Typography variant="button" color="secondary" component="div">
                        <b>Path-Recommendation System</b><RouteIcon/>
                    </Typography>
                    <DropdownChanging destinationsList={destinationsList} setDestinationsList={setDestinationsList} selectedDestination={props.selectedDestination} setSelectedDestination={props.setSelectedDestination}/>
                </Toolbar>
            </AppBar>
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
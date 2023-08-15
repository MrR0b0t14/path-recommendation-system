import { Row, Col} from 'react-bootstrap';
import MyNavbar from '../MyNavbar';
import PathRecommendationForm from '../pathRecommendationForm';
import PathsList from '../pathsList';
import '../../App.css'

function DefaultRoute(props) {
    const menuShow = props.menuShow;
  return(
    <>
        <Row style={{'height':'100%'}}>
            {menuShow && <Col lg={5} className={`p-3 bg-dark`}> <PathRecommendationForm className='custom-menu'/></Col>}
            <Col>
                <Row>
                    <MyNavbar destinationsList={props.destinationsList} setDestinationsList={props.setDestinationsList} menuShow={props.menuShow} setMenuShow={props.setMenuShow} selectedDestination={props.selectedDestination} setSelectedDestination={props.setSelectedDestination}/>
                </Row>
                <Row>
                    <PathsList pathsList={props.pathsList}/>
                </Row>
            </Col>
        </Row>
    </>
  );
}

export default DefaultRoute;
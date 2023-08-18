import { Row, Col} from 'react-bootstrap';
import MyNavbar from '../MyNavbar';
import PathsList from '../pathsList';
import '../../App.css'

function DefaultRoute(props) {
const menuShow = props.menuShow;
const form = props.form;
const setForm = props.setForm;
const pathsList = props.pathsList;
const setPathsList = props.setPathsList;

  return(
    <>
        <Row style={{'height':'100%'}}>
            <Col>
                <Row>
                    <MyNavbar unfinished={props.unfinished} setUnfinished={props.setUnfinished} pathsList={pathsList} setPathsList={setPathsList} form={form} setForm={setForm} destinationsList={props.destinationsList} setDestinationsList={props.setDestinationsList} menuShow={menuShow} setMenuShow={props.setMenuShow} selectedDestination={props.selectedDestination} setSelectedDestination={props.setSelectedDestination}/>
                </Row>
                <Row>
                    <PathsList unfinished={props.unfinished} destinationsList={props.destinationsList} setDestinationsList={props.setDestinationsList} selectedCodeBlock={props.selectedCodeBlock} setSelectedCodeBlock={props.setSelectedCodeBlock} showCode={props.showCode} setShowCode={props.setShowCode} pathsList={props.pathsList}/>
                </Row>
            </Col>
        </Row>
    </>
  );
}

export default DefaultRoute;
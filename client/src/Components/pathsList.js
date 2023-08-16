//import { useState } from 'react';
import {Table, Row, Col,} from 'react-bootstrap';

//Everything needs to be changed, it has been copied from coursetable
function PathsList(props){
 
    return <>
        <Row> 
          <Col><h4>Paths Available</h4></Col>
        </Row>
        <Table className='table-responsive m-auto mb-2 table-expandable' striped bordered hover variant="dark" style={{maxWidth: "75%", margin: 0}}>
            <thead>
                <tr>
                    <th>Path ID</th>
                    <th>Destination</th>
                    <th>Avg. Latency</th>
                    <th>Avg. Bandwidth Upstream</th>
                    <th>Avg. Bandwidth Downstream</th>
                    <th>Avg. Loss</th>
                    <th>Hop Sequence</th>
                    <th>ISDs Traversed</th>
                    <th>Hops Number</th>
                    {/* {props.editMode && <th>Actions</th>} */}
                </tr>
            </thead>
            <tbody>
            {
                props.pathsList.map((p) => 
                    <PathRow color='primary' key={p.id} path={p}/>)
            }
            </tbody>
        </Table>
    </>;
}

function PathRow(props){
    return(
    <>
      <tr>
          <PathData path={props.path}/>
      </tr>
    </>
  );
}


function PathData(props) {
    return(
      <>
        <td>{props.path.id}</td>
        <td>{props.path.destination}</td>
        <td>{props.path.avgLatency}</td>
        <td>{props.path.avgBandwidthCsMTU}</td>
        <td>{props.path.avgBandwidthScMTU}</td>
        <td>{props.path.avgLoss}</td>
        <td>{props.path.hopsSequence}</td>
        <td>{props.path.isolatedDomains.toString()}</td>
        <td>{props.path.hopsNumber}</td>

       {/* {props.editMode && !props.course.not.state ? <td><Button variant="outline-danger" onClick={() => {updateSPAndChecks(props.course);}}>Remove</Button></td> 
        : props.editMode && props.course.not.state && <td>
        <OverlayTrigger trigger={['hover', 'focus', 'click']} placement="left" overlay={popover}>
          <Button variant="outline-danger">Why Not?</Button>
        </OverlayTrigger>
      </td>} */}
      </>
    );
  }

// function StudyPlanForm(props){
//   const findPrereq = props.prereq;
//   const maxStudCheck = props.max;
//     return (
//       <Modal
//         show={props.show}
//         onHide={props.onHide}
//         size="md"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//             Create Your Study Plan
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <Form id="myform">
//                 <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                   <Form.Check
//                     type="checkbox"
//                     label="Full-Time"
//                     checked={props.checked}
//                     onChange={() => props.setChecked(!props.checked)}
//                   />
//                 </Form.Group>
//             </Form> 
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="danger" onClick={props.onHide}>Not Now</Button>
//           <Button variant="success" onClick={() => {props.setEditMode(true); findPrereq([]); maxStudCheck(); props.onHide();}}>
//                 Start Adding Courses
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
// }
export default PathsList;
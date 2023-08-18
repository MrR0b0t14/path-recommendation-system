//import { useState } from 'react';
import {Table, Row, Col,} from 'react-bootstrap';
import {Box, CircularProgress, IconButton, Modal,} from '@mui/material';
import { CopyBlock, noctisViola, } from "react-code-blocks";
import TerminalIcon from '@mui/icons-material/Terminal';

function PathsList(props){
    return <>
        <Row> 
          <Col><h4>Paths Available</h4></Col>
        </Row>
        {props.unfinished ? <Box className='mt-5 w-100 h-100 justify-content-center' sx={{ display: 'flex' }}>
                  <CircularProgress sx={{color:"#AB47BC"}} size='10%'/>
                 </Box> : 
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
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {

              props.pathsList.map((p) => 
                    <PathRow destinationsList={props.destinationsList} setDestinationsList={props.setDestinationsList} selectedCodeBlock={props.selectedCodeBlock} setSelectedCodeBlock={props.setSelectedCodeBlock} showCode={props.showCode} setShowCode={props.setShowCode} color='primary' key={p.id} path={p}/>)
            }
            </tbody>
        </Table>}
        <BasicModal selectedCodeBlock={props.selectedCodeBlock} setSelectedCodeBlock={props.setSelectedCodeBlock} showCode={props.showCode} setShowCode={props.setShowCode}/>
    </>;
}

function PathRow(props){
    return(
    <>
      <tr>
          <PathData destinationsList={props.destinationsList} setDestinationsList={props.setDestinationsList} selectedCodeBlock={props.selectedCodeBlock} setSelectedCodeBlock={props.setSelectedCodeBlock} showCode={props.showCode} setShowCode={props.setShowCode} path={props.path}/>
      </tr>
    </>
  );
}


function PathData(props) {

  const handleClick = () => {
    const destComplete = props.destinationsList.find((d) => d.includes(props.path.destination));
    props.setSelectedCodeBlock({
      destination: destComplete,
      hopsSequence: props.path.hopsSequence,
    });
    props.setShowCode(true);
  }
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
        <td>
          <IconButton onClick={() => handleClick()} color="secondary" aria-label="code snippet">
            <TerminalIcon/>
          </IconButton>
        </td>
      </>
    );
  }

function BasicModal(props) {
    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: "75%",
      bgcolor: 'background.paper',
      border: '2px solid #000',
      rounded: 0,
      boxShadow: 24,
      p: 5,
    };

    const open = props.showCode ? props.showCode : false;
    const setOpen = props.setShowCode;
    const code = `scion traceroute '${props.selectedCodeBlock.destination}' --sequence '${props.selectedCodeBlock.hopsSequence}'`;
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className='rounded' sx={style}>
            <CopyBlock
              text={code}
              language={"bash"}
              showLineNumbers={false}
              theme={noctisViola}
              codeBlock
            />;
          </Box>
        </Modal>
      </div>
    );
  }
export default PathsList;
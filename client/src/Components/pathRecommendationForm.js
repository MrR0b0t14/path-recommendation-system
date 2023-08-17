// eslint-disable-next-line
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// // import { useNavigate } from "react-router-dom";
// import { GrNetwork } from "react-icons/gr";
// import API from "../API/API";
// import {TiThMenu} from "react-icons/ti";
import { TextField, Button, Box, Divider, Chip, Typography, SwipeableDrawer, IconButton} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TuneIcon from '@mui/icons-material/Tune';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import API from '../API/API';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import { Menu, MenuItem } from '@mui/material';

function PathRecommendationForm(props){
    const form = props.form;
    const setForm = props.setForm;
    const setPathsList = props.setPathsList;

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const paths = await API.loadFilteredPaths(form);
            setPathsList(paths);
            props.setMenuShow(false);
          } catch (error) {
            console.log(error);
          }
    }

    return(
        <>
        <Box onSubmit={(event) => handleSubmit(event)} className='mt-5' sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, }} component='form'>
            <div className='px-3 mb-3 d-flex flex-column justify-content-center'>
                <Typography className='mx-5 text-center' sx={{ fontSize: 24 }} variant="button" color='secondary' display="block" gutterBottom>
                    Filter Your Paths
                </Typography>
                <CustomizedMenus value={form.minLatency} onChange={(e) => setForm({...form, destination: e.target.value})} form={form} setForm={setForm} destinationsList={props.destinationsList} setDestinationsList={props.setDestinationsList} selectedDestination={props.selectedDestination} setSelectedDestination={props.setSelectedDestination}/>
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{ fontWeight: 'bold' }} label="Latency" className='font-weight-bold' />
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField value={form.minLatency} onChange={(e) => setForm({...form, minLatency: e.target.value})} InputLabelProps={{ style: { fontWeight: 'bold' } }} type='number' placeholder="In ms (e.g 25 means 25ms)" color='secondary' id="outlined-basic" label="min. Latency" variant="outlined" />
                <TextField value={form.maxLatency} onChange={(e) => setForm({...form, maxLatency: e.target.value})} InputLabelProps={{ style: { fontWeight: 'bold' } }} type='number' placeholder="In ms (e.g 25 means 25ms)" color='secondary' id="outlined-basic" label="max. Latency" variant="outlined" />
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{ fontWeight: 'bold' }} label="Bandwidth Upstream" className='font-weight-bold' />
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField value={form.minBandwidthUpstream} onChange={(e) => setForm({...form, minBandwidthUpstream: e.target.value})} InputLabelProps={{ style: { fontWeight: 'bold' } }} type='number' placeholder="In Mbps (e.g 25 means 25Mbps)" color='secondary' id="outlined-basic" label="min. Bandwidth Upstream" variant="outlined" />
                <TextField value={form.maxBandwidthUpstream} onChange={(e) => setForm({...form, maxBandwidthUpstream: e.target.value})}InputLabelProps={{ style: { fontWeight: 'bold' } }} type='number' placeholder="In Mbps (e.g 25 means 25Mbps)" color='secondary' id="outlined-basic" label="max. Bandwidth Upstream" variant="outlined" />
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{ fontWeight: 'bold' }} label="Bandwidth Downstream" className='font-weight-bold' />
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField value={form.minBandwidthDownstream} onChange={(e) => setForm({...form, minBandwidthDownstream: e.target.value})} InputLabelProps={{ style: { fontWeight: 'bold' } }} type='number' placeholder="In Mbps (e.g 25 means 25Mbps)" color='secondary' id="outlined-basic" label="min. Bandwidth Downstream" variant="outlined" />
                <TextField value={form.maxBandwidthDownstream} onChange={(e) => setForm({...form, maxBandwidthDownstream: e.target.value})} InputLabelProps={{ style: { fontWeight: 'bold' } }} type='number' placeholder="In Mbps (e.g 25 means 25Mbps)" color='secondary' id="outlined-basic" label="max. Bandwidth Downstream" variant="outlined" />
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{ fontWeight: 'bold' }} label="Loss" className='font-weight-bold' />
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField value={form.minPacketLoss} onChange={(e) => setForm({...form, minPacketLoss: e.target.value})} InputLabelProps={{ style: { fontWeight: 'bold' } }} type='number' placeholder="In % (e.g 0.5 means 0.5%)" color='secondary' id="outlined-basic" label="min. Loss" variant="outlined" />
                <TextField value={form.maxPacketLoss} onChange={(e) => setForm({...form, maxPacketLoss: e.target.value})} InputLabelProps={{ style: { fontWeight: 'bold' } }} type='number' placeholder="In % (e.g 0.5 means 0.5%)" color='secondary' id="outlined-basic" label="max. Loss" variant="outlined" />
            </div>
            <Divider className='mx-5' role="presentation" light>
                <Chip variant='outlined' color='secondary' sx={{ fontWeight: 'bold' }} label="More" className='font-weight-bold' />
            </Divider>
            <div className='px-3 d-flex justify-content-around'>
                <TextField value={form.maxNumberOfHops} onChange={(e) => setForm({...form, maxNumberOfHops: e.target.value})} InputLabelProps={{ style: { fontWeight: 'bold' } }} type='number' placeholder="(e.g 5)" color='secondary' id="outlined-basic" label="Maximun Number of Hops:" variant="outlined" />
                <TextField value={form.isdsToAvoid} onChange={(e) => setForm({...form, isdsToAvoid: e.target.value})} InputLabelProps={{ style: { fontWeight: 'bold' } }} placeholder="(e.g 16, 19)" color='secondary' id="outlined-basic" label="ISDs to avoid" variant="outlined" />
            </div>
            <div className='px-3 d-flex justify-content-center'>
                <Button type='submit' color='secondary' variant="outlined" endIcon={<TuneIcon />}>Filter</Button>
            </div>
        </Box>
        </>
    )
}
const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.secondary.main,
            theme.palette.secondary.selectedOpacity,
          ),
        },
      },
    },
  }));
  
  function CustomizedMenus(props) {
      const setSelectedDestination = props.setSelectedDestination;
      const selectedDestination = props.selectedDestination;
      const destinationsList = props.destinationsList;
      const [anchorEl, setAnchorEl] = React.useState(null);
      const open = Boolean(anchorEl);
  
      const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
      };
  
      const handleClose = (value) => {
          setAnchorEl(null);
          setSelectedDestination(value);
          props.setForm({...props.form, destination: props.selectedDestination});
          console.log(props.form);
      };
  
    return (
      <div className='d-flex justify-content-center'>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          color='secondary'
          onClick={(e) => handleClick(e)}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {selectedDestination === "" ? "Select a Destination" : selectedDestination}
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose(selectedDestination)}
        >
          <MenuItem onClick={() => handleClose("")} disableRipple>
            All Destinations
          </MenuItem>
          {
              destinationsList.map((d,i) => 
                  <MenuItem onClick={() => handleClose(d)} disableRipple key={i}>{d}</MenuItem>
              )
          }
        </StyledMenu>
      </div>
    );
  }

function FormDrawer(props){
    
    const setMenuShow = props.setMenuShow;
    const menuShow = props.menuShow;
    const form = props.form;
    const setForm = props.setForm;
    const pathsList = props.pathsList;
    const setPathsList = props.setPathsList;

    const toggleDrawer = (open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    
        setMenuShow(open);
    };

    return (
        <>
            <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                open={menuShow}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <PathRecommendationForm destinationsList={props.destinationsList} setDestinationsList={props.setDestinationsList} selectedDestination={props.selectedDestination} setSelectedDestination={props.setSelectedDestination} menuShow={menuShow} setMenuShow={setMenuShow} pathsList={pathsList} setPathsList={setPathsList} form={form} setForm={setForm} />
            </SwipeableDrawer>  
        </>
    );
}



export default FormDrawer;
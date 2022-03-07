import React, { useState } from 'react'
import "./Dashboard.css"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { makeStyles } from '@mui/styles';
import HandymanIcon from '@mui/icons-material/Handyman';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import CommentIcon from '@mui/icons-material/Comment';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Switch from "@mui/material/Switch";
import { toast, ToastContainer } from 'react-toastify';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Tooltip from '@mui/material/Tooltip'
import Dashboard from './Dashboard';


const useStyles = makeStyles({
  root: {
    color: 'primary',
    fontSize: '60',
    m: "2rem"
  }

});

const Dashboardmain = () => {

  const [value, setValue] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.checked)

    if (!value) {
      toast.success("Bot has been enabled successfully!");
    } else {
      toast.error("Bot has been disabled successfully!")
    }
  }
  const classes = useStyles();
  return (
    <>
      <div className='Dashboard-container'>

        {/* Sidebar menu */}
        <div>
          <Dashboard/>
        </div>


        {/* search bar and create Bot */}
        <form classname="search-container">
          <input type="text" className="search-bar" placeholder="Search here" />
          <a href="#"><img className="search-icon" src="./images/search-icon.png" /></a>
        </form>

        {/* create a new Bot */}
        <code className="border-dotted">
          <Box m={1}>
            <Typography
              className={classes.root}
            >
              Create new bot</Typography>
          </Box>
        </code>

      </div>

      {/* main section */}
      <div className="card">
        <table style={{ textAlign: "center", color: "rgb(0 0 0 / 55%)", marginTop: "30px" }}>

          <tr>
            <td rowspan="2" style={{ borderRight: "1px solid gray", width: "40%" }}><img src="./images/image1.png" class="rounded-circle" /></td>
            <div className="submenus" style={{cursor:"pointer"}}>
              <Tooltip title="Setup" placement='top'>
                <td><a href='/setup'><HandymanIcon /></a></td>
              </Tooltip>
              <Tooltip title="Triggers" placement='top'>
                <td><NotificationsIcon /></td>
              </Tooltip>
              <Tooltip title="Settings" placement='top'>
                <td><a href='/settings'><SettingsIcon /></a></td>
              </Tooltip>
            </div>
          </tr>
          <tr>
            <div className="submenus" style={{cursor:"pointer"}}>
              <Tooltip title="Access Chats" placement='bottom'>
                <td><CommentIcon /></td>
              </Tooltip>
              <Tooltip title="Live Chat" placement='bottom'>
                <td><VoiceChatIcon /></td>
              </Tooltip>
              <Tooltip title="Analytics" placement='bottom'>
                <td><AnalyticsIcon /></td>
              </Tooltip>
            </div>
          </tr>

        </table>
        <hr />
        <div style={{ display:"flex",flexDirection:"row" }}>
          <Switch
            checked={value}
            onChange={handleChange}
            name="Switch"
            inputProps={{ "aria-label": "test switch" }}
          />
          <AccessTimeIcon  style={{marginTop:"7px",marginLeft:"20px"}}/>
          <Typography style={{padding:"8px"}}>
            8 days ago
          </Typography>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </>
  )
}

export default Dashboardmain

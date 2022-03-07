import React from 'react'
import "./Dashboard.css"
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TableChartIcon from '@mui/icons-material/TableChart';

const Dashboard = () => {

  return (
    <>
      <div className='Dashboard-container'>

        {/* Sidebar menu */}
        <div>
          <nav class="sidebar-navigation">
            <ul>

              <li>
                <a href="/dashboardmain" class="current"><HomeIcon/></a>
                <span class="tooltip">Bots</span>
              </li>
              <li>
                <a href="#"><SmartToyIcon/></a>{/*<i class='fas fa-robot'></i>*/}
                <span class="tooltip">AI Agents</span>
              </li>
              <li>
                <a href="#">{/*<i class="fa fa-table" aria-hidden="true"></i>*/}<TableChartIcon/></a>
                <span class="tooltip">Templates</span>
              </li>
              <li>
                <a href="#">{/*<i class='fa fa-address-book'></i>*/}<PersonOutlineIcon/></a>
                <span class="tooltip">Referral</span>
              </li>
              <li>
                <a href="/mailing"><EmailIcon/></a>
                <span class="tooltip">Email Marketing</span>
              </li>
              <li>
                <a href="/settings"><SettingsIcon/></a>
                <span class="tooltip">Settings</span>
              </li>
            </ul>
          </nav>
        </div>

      </div>
     
    </>
  )
}

export default Dashboard

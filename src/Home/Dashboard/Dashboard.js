import React from 'react'
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='Dashboard-container'>

      {/* Sidebar menu */}
      <div>
        <nav class="sidebar-navigation">
          <ul>

            <li>
              <i class="fa fa-home" aria-hidden="true"></i>
              <span class="tooltip">Bots</span>
            </li>
            <li>
              <i class='fas fa-robot'></i>
              <span class="tooltip">AI Agents</span>
            </li>
            <li>
              <i class="fa fa-table" aria-hidden="true"></i>
              <span class="tooltip">Templates</span>
            </li>
            <li>
              <i class='fa fa-address-book'></i>
              <span class="tooltip">Referral</span>
            </li>
          </ul>
        </nav>
      </div>


      {/* search bar and create Bot */}
      <form classname="search-container">
        <input type="text" className="search-bar" placeholder="Search here" />
        <a href="#"><img className="search-icon" src="./images/search-icon.png" /></a>
      </form>

      {/* create a new Bot */}
      <code class="border-dotted">Create new bot</code>

    </div>
  )
}

export default Dashboard


{/* sidebarmenus 
      <div class="sidebar-container">

        <div class="sidebar-navigation">

          
            <a href="/dashboard" className='sidebar-links'>
              <i class="fa fa-home" aria-hidden="true"></i><span>Homepage</span>
            </a>
          
            <a href="/agents" className='sidebar-links'>
              <i class='fas fa-robot'></i><span>AI Agents</span>
            </a>
         
            <a href="/templates" className='sidebar-links'>
              <i class="fa fa-table" aria-hidden="true"></i><span>Template</span>
            </a>

            <a href="/referal" className='sidebar-links'>
              <i class='fa fa-address-book'></i><span>Referral</span>
            </a>
          
        </div>
      </div>
      */}

import { Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import "./install.css"

function Install() {
  const [website, setWebsite] = useState(false)
  const [ Blog, setBlog ] = useState(false)
  const [ messenger, setMessenger ] = useState(false)
  const [ wordpress, setWordpress ] = useState(false)
  return (
    <div>
      <div id="viewport">
        {/* Sidebar  */}
        <div id="sidebar">

          <ul class="nav">
            <li>
              <a href="#" onClick={() => {setWebsite(true); setBlog(false); setMessenger(false); setWordpress(false); }}>
                 Install it on your website
              </a>
            </li>
            <li>
              <a href="#" onClick={() => { setBlog(true); setWebsite(false); setMessenger(false); setWordpress(false); }}>
                Install it on your Blog
              </a>
            </li>
            <li>
              <a href="#" onClick={() => { setMessenger(true); setWebsite(false); setBlog(false); setWordpress(false); }}>
                 Install it on Messenger
              </a>
            </li>
            <li>
              <a href="#">
                <i class="zmdi zmdi-calendar"></i> WhatsApp Installation
              </a>
            </li>
            <li>
              <a href="#">
                <i class="zmdi zmdi-info-outline"></i> Instagram Installation
              </a>
            </li>
            <li>
              <a href="#" onClick={() => { setWordpress(true); setMessenger(false); setWebsite(false); setBlog(false); }}>
                 Wordpress Installation
              </a>
            </li>
            <li>
              <a href="#">
                <i class="zmdi zmdi-comment-more"></i> Mobile App
              </a>
            </li>
            <li>
              <a href="#">
                <i class="zmdi zmdi-comment-more"></i> Landing Page
              </a>
            </li>
            <li>
              <a href="#">
                <i class="zmdi zmdi-comment-more"></i> Widget
              </a>
            </li>
            <li>
              <a href="#">
                <i class="zmdi zmdi-comment-more"></i> Drupal Installation
              </a>
            </li>
            <li>
              <a href="#">
                <i class="zmdi zmdi-comment-more"></i> Connect Whastapp Catalog
              </a>
            </li>
          </ul>
        </div>
        {/* Content */}
        <div id="content">
          {
            website ? (
              <div className='install-page-content'>
                  <Typography variant='p' className='install-page-content-para'>Please check your inbox and 'verify your email'.</Typography>
                  <Typography variant='p' className='install-page-content-para'>If not received plz write to us at <a href="" style={{color:"blue"}}>info@smatbot.com</a></Typography>
                  <Button variant="contained">Verify your Email</Button>
              </div>
            ) : " " }
            {
            Blog ? (
              <div className='install-page-content'>
                  <Typography variant='p' className='install-page-content-para'>Please verify your email to generate the installation code.</Typography>
                  <Button variant="contained">Verify your Email</Button>
              </div>
            ) : " " }
            {
            messenger ? (
              <div className='install-page-content'>
                  <Typography variant='p' className='install-page-content-para'>Sorry this feature is not available for you, You need to upgrade to get this feature</Typography>
                  <Button variant="contained">Upgrade</Button>
              </div>
            ) : " " }
            {
            wordpress ? (
              <div className='install-page-content'>
                  <Typography variant='p' className='install-page-content-para'>Please check your inbox and 'verify your email'.</Typography>
                  <Typography variant='p' className='install-page-content-para'>If not received plz write to us at <a href="" style={{color:"blue"}}>info@smatbot.com</a></Typography>
                  <Button variant="contained">Verify your Email</Button>
              </div>
            ) : " " }
        </div>
      </div>
    </div>
  )
}

export default Install

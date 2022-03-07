import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import SettingsIcon from '@mui/icons-material/Settings';
import Typography from "@mui/material/Typography"
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import EmailIcon from '@mui/icons-material/Email';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import ShowChartSharpIcon from '@mui/icons-material/ShowChartSharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import DevicesSharpIcon from '@mui/icons-material/DevicesSharp';
import FolderSharpIcon from '@mui/icons-material/FolderSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import "./Setting.css"

const Setting = () => {
    return (
        <div className='mail-head'>

            {/* Sidebar menu */}
            <div>
                <Dashboard />
            </div>

            <div class="s-layout">
                {/*HEADER */}
                <div className='settings-icon'>
                    <SettingsIcon className="setting-icon-alignment" />
                    <Typography className='settings-typo'>Settings</Typography>
                </div>
                {/* sidebar */}
                <div class="s-layout__sidebar">

                    <nav class="s-sidebar__nav">
                        <ul>
                            <li>
                                <Typography className='sidebar-headings'>CHANNELS</Typography>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <VoiceChatIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Live Chat</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <BookmarkIcon className='sidebar-icons' />
                                    <Typography className='sidebar-para'>Sidebar</Typography>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <InsertLinkIcon className='sidebar-icons' />
                                    <Typography className='sidebar-para'>Installation</Typography>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <LaptopMacIcon className='sidebar-icons' />
                                    <Typography className='sidebar-para'>Chat page</Typography>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <EmailIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Email</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <ChatSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Facebook Messenger</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <Typography className='sidebar-headings'>PERSONAL</Typography>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <AccountCircleSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Account</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <NotificationsSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Notifications</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <AccessTimeSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Operating Hours</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <Typography className='sidebar-headings'>GENERAL</Typography>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <ShowChartSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Quick Responses</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <PeopleSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Operators</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <EmailSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Email Marketing</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <AppsSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Integrations</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <DevicesSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Desktop & Mobiles</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <FolderSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Conatct Properties</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <LanguageSharpIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Project & Billing</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <InsertChartOutlinedRoundedIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Tracking</Typography>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="s-sidebar__nav-link" href="#0">
                                    <div className='sidebar-subheadings'>
                                        <CodeOutlinedIcon className='sidebar-icons' />
                                        <Typography className='sidebar-para'>Developer</Typography>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>


                <div class="s-layout__content">
                    <div class="content1">
                        <a class="main-content-headline" href="#0">
                           
                        </a>
                    </div>
                    <div class="content2">

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Setting
import React from 'react'
import "./Navbar.css"
import { Avatar } from '@mui/material'

const Logout = () => {
    const email = localStorage.getItem("email")
    return (
        <div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-list-4">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {/*<img src="./images/avatar.png" width="30" height="30" class="rounded-circle" />*/}
                            <Avatar src="/broken-image.jpg" />
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{textAlign:"center"}}>
                            <p style={{textAlign:"center",color: "rgb(0 0 0 / 72%)"}}>signed in as <span style={{fontWeight:"bold",color:"rgb(0 0 0)"}}>{email}</span></p><hr/>
                            <a class="dropdown-item" href="/dashboard">Dashboard</a>
                            <a class="dropdown-item" href="#">Edit Profile</a>
                            <a href="/" class=" dropdown-item" onClick={() => { localStorage.clear(); window.location.reload(); }}>Sign out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default function Navbar() {

    const token = localStorage.getItem("auth");
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">DigiBot</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Marketing & Sales</a></li>
                                    <li><a class="dropdown-item" href="#">Supports</a></li>
                                    <li><a class="dropdown-item" href="#">Templates</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">WhatsApp</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">UseCases</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Pricing</a>
                            </li>
                            {(!(token)) ?
                                <div className='login-register'>
                                    <li class="nav-item">
                                        <a href="/login" class="nav-link">Login</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="/register" class="nav-link">Sign Up</a>
                                    </li>
                                </div> :
                                <li class="nav-item">
                                    <Logout />

                                </li>
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}


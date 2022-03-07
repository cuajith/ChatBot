import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import "./Emailsection.css"
import Typography from "@mui/material/Typography"

const Emailsection = () => {
    return (
        <div className='mail-head'>

            {/* Sidebar menu */}
            <div>
                <Dashboard />
            </div>

            <div id="wrapper">

                {/* } Sidebar */}
                <div id="sidebar-wrapper">
                    <ul class="sidebar-nav">
                        <li class="sidebar-brand">
                            <a href="#">
                               <Typography>CREATE</Typography> 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Typography className='typo'>Templates</Typography>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Typography className='typo'>Custom Templates</Typography>
                            </a>
                        </li>
                        <li class="sidebar-brand">
                            <a href="#">
                                <Typography>REGULAR CAMPAIGNS</Typography>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <Typography className='typo'>All</Typography>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Typography className='typo'>Sent</Typography>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Typography className='typo'>Scheduled</Typography>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <Typography className='typo'>Draft</Typography>
                            </a>
                        </li>
                    </ul>
                </div>


                {/* Page Content */}
                <div id="page-content-wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="searchBox">
                                    <input type="search" placeholder="Search" />
                                    <i class="fa fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accordin */}
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <Typography>
                                    Recommended for you
                                </Typography>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis dignissim, imperdiet nulla vitae, condimentum nulla. Ut scelerisque a nisl sit amet facilisis. Etiam blandit iaculis tellus, vitae condimentum leo congue a. Vivamus in vehicula massa. Pellentesque libero libero, commodo lacinia volutpat non, tincidunt at lectus. Maecenas ipsum turpis, viverra vitae lacus eu, fringilla ultricies erat. Aenean hendrerit maximus sodales.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <Typography>
                                    Basic Templates
                                </Typography>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Quisque sapien augue, ornare id leo a, tristique elementum justo. Praesent non nulla sagittis, sollicitudin justo id, varius erat. Nunc sed pharetra nisl. Cras et suscipit felis, in lacinia sapien. Integer venenatis sagittis massa, eu eleifend nibh venenatis in. Pellentesque a aliquet urna. Curabitur tortor metus, ultrices sed mi at, sagittis imperdiet turpis. Suspendisse nec luctus nunc. Fusce in arcu quis lacus mollis ultrices.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <Typography>
                                    Boost Online Sales
                                </Typography>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Praesent nec ipsum scelerisque dui condimentum pellentesque eu at lectus. Vivamus purus purus, bibendum in vestibulum ac, pharetra sit amet sapien. Nunc luctus, orci vel luctus cursus, nibh nisl ullamcorper ipsum, eu malesuada arcu augue id nisi. In auctor mi ac ante tincidunt tincidunt.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emailsection
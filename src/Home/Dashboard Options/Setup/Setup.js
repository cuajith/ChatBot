import React, { useState } from 'react'
import Dashboard from '../../Dashboard/Dashboard'
import { Button, Typography } from "@mui/material"
import Flowsetup from './Flowsetup'
import Install from './Install'
import "./Setup.css"
import viewSetup from './Viewsetup.js'

const Setup = () => {
    const [text, setText] = useState(true);
    const [flow, setFlow] = useState(false);
    const [install, setInstall] = useState(false);

    return (
        <div>
            <div>
                <Dashboard />
            </div>
            {/*HEADER */}
            <div className='setup-content'>
                <div id='setup-header'>
                    <Button onClick={() => { setText(true); setFlow(false); setInstall(false) }} className='setup-para' variant="text">Text</Button>
                    <Button onClick={() => { setText(false); setFlow(true); setInstall(false) }} className='setup-para'>Flow Setup</Button>
                    <Button onClick={() => { setText(false); setFlow(false); setInstall(true) }} className='setup-para'>Install</Button>
                </div>
                <div className='setup-main-content'>
                    {(text) ? <viewSetup /> : " "}
                    {(flow) ? <Flowsetup /> : " "}
                    {(install) ? <Install /> : " "}
                </div>
            </div>
        </div>
    )
}
export default Setup
import React from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from './auth/ResetPassword'
import Dashboard from './Home/Dashboard/Dashboard';

function Reactrouter() {
    return (
        <Switch>
            <Route exact path='/register' component={Registration} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/reset-password' component={ResetPassword} />
            <Route exact path='/dashboard' component={Dashboard}/>
            <ToastContainer />
        </Switch>
    )
}

export default Reactrouter
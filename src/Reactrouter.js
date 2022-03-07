import React from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from './auth/ResetPassword'
import Dashboard from './Home/Dashboard/Dashboard';
import Dashboardmain from './Home/Dashboard/Dashboardmain';
import PrivateRoute from './auth/PrivateRoute';
import Emailsection from './Home/Emailcomponent/Emailsection';
import Settings from './Home/SettingsComponent/Settings';
import Setup from './Home/Dashboard Options/Setup/Setup';

function Reactrouter() {
    return (
        <Switch>
            <Route exact path='/register' component={Registration} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/reset-password' component={ResetPassword} />
            <PrivateRoute component={Dashboard} path="/dashboard" exact />
            <PrivateRoute exact path='/dashboardmain' component={Dashboardmain} />
            <PrivateRoute exact path='/mailing' component={Emailsection} />
            <PrivateRoute exact path='/settings' component={Settings} />
            <Route exact path='/setup' component={Setup} />
            <ToastContainer />
        </Switch>
    )
}

export default Reactrouter
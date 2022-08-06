import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute'
import Login from 'pages/Login'
import Home from 'pages/Home'
import Dashboard from 'pages/admin/Dashboard'
import NotFound from 'pages/NotFound'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

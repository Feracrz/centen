import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import ProtectedRoute from './ProtectedRoute'



//Home
import Home from  './Components/Common/Home/Home'


//Nucc


//Rac


//Usuario


//Distritos
function App (props) {
  const { isAuthenticated, isVerifying } = props
  return (
    <Switch>
    <Route path='/Login' component={Login} />

    <ProtectedRoute
    exact
        path='/'
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
    />



    </Switch>
  )
}
function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  }
}

export default connect(mapStateToProps, {})(App)

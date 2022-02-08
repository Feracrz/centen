import React from 'react'
import { Route, Switch } 'react-route-dom'
import { conect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../../../actions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import './Login.css'
import logoH from '../../../imgs/logo2.png'
import ReactPlayer from 'react-player'


class Login extends Component {
  render () {
    return (
      <div>
      <h1>Este es el  login </h1>
      </div>

    )
  }


}

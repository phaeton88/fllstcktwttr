import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './index.scss';
import {checkStatus, json, safeCredentials, handleErrors} from '../utils/helpers'

class HomePage extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      username: '',
      password: '',
      email: '',
      logusername: '',
      logpassword: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSignup(event) {
    event.preventDefault();
    const { email, password, username } = this.state;
    fetch(`/users`, safeCredentials({
      method: 'POST',
      body: JSON.stringify({
      user: {
        username: username,
        email: email,
        password: password,
        }
      })
    }))
    .then(handleErrors)
    .then(res => {
        if (res.user) {
          alert('Singned up successfully');
          window.location.replace("/");
        }
    })

  }

  handleLogin(event) {
    event.preventDefault();
    const { logpassword, logusername } = this.state;
    fetch(`/sessions`, safeCredentials({
      method: 'POST',
      body: JSON.stringify({
        user: {
          username: logusername,
          password: logpassword,
        }
      })
    }))
    .then(handleErrors)
    .then(res => {
      if (res.success) {
        window.location.replace("/feed");;
      }
    })

  }

  render () {
    const { email, password, username, logusername, logpassword } = this.state;

    return (
      <Layout>
        <div className="d-flex justify-content-center py-4">
          <h1 className="title">Welcome</h1>
        </div>
        <form className="pb-4" onSubmit={this.handleLogin}>
          <div className="form-group">
            <input type="text" name="logusername" value={logusername} onChange={this.handleChange} className="form-control username" placeholder="Username"></input>
          </div>
          <div className="form-group col-xs-8">
            <input type="password" name="logpassword" value={logpassword} onChange={this.handleChange} className="form-control password" placeholder="Password"></input>
          </div>
          <button id="log-in-btn" className="btn btn-default btn-primary col-xs-3 col-xs-offset-1">Log in</button>
        </form>

        <form className="py-5" onSubmit={this.handleSignup}>
          <div className="new-to-t">
            <p><strong>New to Twitter?</strong><span> Sign Up</span></p>
          </div>
          <div className="form-group">
            <input type="text" name="username" value={username} onChange={this.handleChange} className="form-control username" placeholder="Username"></input>
          </div>
          <div className="form-group">
            <input type="email" name="email" value={email} onChange={this.handleChange} className="form-control email" placeholder="Email"></input>
          </div>
          <div className="form-group">
            <input type="password" name="password" value={password} onChange={this.handleChange} className="form-control password" placeholder="Password"></input>
          </div>
          <button id="sign-up-btn" className="btn btn-default btn-warning pull-right">Sign up for Twitter</button>
        </form>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HomePage />,
    document.body.appendChild(document.createElement('div')),
  )
})

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './feed.scss';
import {checkStatus, json, safeCredentials, handleErrors} from '../utils/helpers';
import Tweet from './tweet.jsx';



class Feed extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      message: '',
      tweets: [],
      usrname: '',
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.getTweets = this.getTweets.bind(this);
  this.authenticate = this.authenticate.bind(this);
  this.deleteTweet = this.deleteTweet.bind(this);
  this.logOut = this.logOut.bind(this);
  }


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  getTweets () {
    fetch("/tweets")
      .then(handleErrors)
      .then((res) => {
        //console.log (res.tweets);
        this.setState ({tweets: res.tweets});
      });
  }

  authenticate () {
    fetch("/authenticated")
      .then(handleErrors)
      .then((res) => {
        //console.log (res.username);
        this.setState ({usrname: res.username});
      });
  }

  componentDidMount () {
    this.getTweets ();
    this.authenticate ();
  }

  handleSubmit(event) {
    event.preventDefault();
    const { message } = this.state;
    fetch(`/tweets`, safeCredentials({
      method: 'POST',
      body: JSON.stringify({
      message: message
      })
    }))
    .then(handleErrors)
    .then(res => {
        //console.log(res.tweet.username);
        this.getTweets();
    })
  }

  deleteTweet (id) {
    fetch(`/tweets/` +id, safeCredentials({
      method: 'DELETE',
      body: JSON.stringify({
      id: id
      })
    }))
    .then(handleErrors)
    .then(res => {
        //console.log(res);
        this.getTweets();
    })
  }

  logOut () {
    fetch(`/sessions/`, safeCredentials({
      method: 'DELETE',
    }))
    .then(handleErrors)
    .then(res => {
        if (res.success) {
          window.location.replace("/");
        }
    })
  }

  render () {
    const { message, tweets, usrname } = this.state;
    return (
    <Layout>
      <div className="d-flex justify-content-center py-4">
        <h1 className="title">Feed</h1>
      </div>
      <form onSubmit={this.handleSubmit}>
        <textarea name="message" value={message} type="text" className="form-control post-input" rows="3" placeholder="What's happening?" onChange={this.handleChange} />
        <button className="btn btn-primary" id="post-tweet-btn">Tweet</button>
      </form>
      {tweets.map((tweet) => {
              return  <Tweet key={tweet.id} tweet={tweet} usrname={usrname} onDelete={this.deleteTweet}/>;
            })}
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary my-4" onClick={this.logOut}>Log out</button>
      </div>
    </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})

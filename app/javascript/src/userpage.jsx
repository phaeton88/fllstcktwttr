import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './userpage.scss';
import {checkStatus, json, safeCredentials, handleErrors} from '../utils/helpers';
import Tweet from './tweet.jsx';

class Userpage extends React.Component {
  constructor (props ) {
    super (props);
    this.state = {
      usrtweets: [],
      usrname: '',
    }
    this.getUserTweets = this.getUserTweets.bind(this);
  }



  getUserTweets () {
    const username = window.location.pathname.replace('/userpage/', '');
    fetch(`/users/` + username + `/tweets`)
      .then(handleErrors)
      .then((res) => {
        this.setState ({usrtweets: res.tweets, usrname: username});
      });
  }

  componentDidMount () {
    this.getUserTweets ();
  }

  render () {
    const { usrtweets, usrname } = this.state;
    return (
      <Layout>
      <div className="d-flex justify-content-center py-4">
        <h1>User: {usrname}</h1>
      </div>
      {usrtweets.map((tweet) => {
        return  <Tweet key={tweet.id} tweet={tweet} onDelete={this.deleteTweet}/>;
      })}
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Userpage />,
    document.body.appendChild(document.createElement('div')),
  )
})

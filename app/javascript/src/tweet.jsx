import React from 'react';
import ReactDOM from 'react-dom';


class Tweet extends React.Component {
  render () {
    const { tweet, usrname, onDelete } = this.props;
    const { id, username, message } = tweet;
    return (
      <div className="row mb-1">
        <div className="col">
          <a href={'/userpage/' + username}>
            <h4 className="pt-4">User: {username}</h4>
          </a>
          <p>Message: {message} </p>
          {(function () {
    if (usrname === username) {
      return (<button className="btn-danger mb-4" onClick={() => onDelete(id)}>Delete</button>)
    }
    })()}
        </div>
      </div>
    )
  }
}
export default Tweet;

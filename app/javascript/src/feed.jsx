import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './feed.scss';

const Feed = () => (
  <Layout>
    <h1>Feed</h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Feed />,
    document.body.appendChild(document.createElement('div')),
  )
})

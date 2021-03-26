import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './userpage.scss';

const Userpage = () => (
  <Layout>
    <h1>User page</h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Userpage />,
    document.body.appendChild(document.createElement('div')),
  )
})

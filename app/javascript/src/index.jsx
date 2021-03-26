import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './index.scss';

const Index = () => (
  <Layout>
    <h1>Start page</h1>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.body.appendChild(document.createElement('div')),
  )
})

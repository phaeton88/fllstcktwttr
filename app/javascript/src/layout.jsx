import React from 'react';
import './layout.scss';
const Layout = (props) => {
  return (
    <React.Fragment>
    <nav className="navbar navbar-default navbar-fixed-top py-3">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <span>Twitter</span>
          </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">language: <strong>English </strong><span className="caret"></span></a>
            <ul className="dropdown-menu row" role="menu">
              <li className="col-xs-12"><a href="#">Bahasa Malaya</a></li>
              <li className="col-xs-12"><a href="#">Dansk</a></li>
              <li className="col-xs-12"><a href="#">English</a></li>
              <li className="col-xs-12"><a href="#">Suomi</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-5 footer">
        <div>
          <span className="mr-3 text-secondary small">Built by Alex Kostritsa</span>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Layout;

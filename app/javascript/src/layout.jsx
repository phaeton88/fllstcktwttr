import React from 'react';
const Layout = (props) => {
  return (
    <React.Fragment>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            <span>twitter</span>
          </a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">language: <strong>English </strong><span class="caret"></span></a>
            <ul class="dropdown-menu row" role="menu">
              <li class="col-xs-12"><a href="#">Bahasa Malaya</a></li>
              <li class="col-xs-12"><a href="#">Dansk</a></li>
              <li class="col-xs-12"><a href="#">English</a></li>
              <li class="col-xs-12"><a href="#">Suomi</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-5 bg-light">
        <div>
          <span className="mr-3 text-secondary">Built by Alex Kostritsa</span>
        </div>
      </footer>
    </React.Fragment>
  );
}
export default Layout;

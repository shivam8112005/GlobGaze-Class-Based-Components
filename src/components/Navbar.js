import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Navbar extends Component {






    //render method is a lifecycle method , when react runs it renders html on the browser
  render() {
    const handleNavClick=(e)=>{
      
    }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">GlobeGaze</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
          {/* <a className="nav-link" href="/about">Business</a> */}
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">general</a>
        </li> */}
        <li className="nav-item">
        <Link className="nav-link" to="/health">Health</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/science">Science</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/technology">Technology</Link>
        </li>
        
      
      </ul>
    
    </div>
  </div>
</nav>
      </div>
    )
  }
}







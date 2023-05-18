import React from 'react';
// import logo from '../../../../public/asset/images/Marvel_Logo.png'

export default function Navigation() {
  const divStyle = {
    backgroundColor: '#000',
    padding: '10px',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const navStyle = {
    backgroundColor: '#000',
    justifyContent: 'center',
    display: 'flex',
  };

  const linkStyle = {
    color: '#fff',
    marginRight: '10px',
    textDecoration: 'none',
  };


  return (
    <div style={divStyle} className="bg-black">
       <div className="navbar-brand">
               <img src='asset/images/Marvel_Logo.png' style={{width: '250px', height:'100px', justifyContent: 'center', display: 'flex'}} alt={"logo"}/> 
          </div>
      <nav style={navStyle} className="navbar navbar-expand-lg  ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <a style={linkStyle} className="navbar-brand" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a style={linkStyle} className="navbar-brand" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a style={linkStyle} className="navbar-brand" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a style={linkStyle} className="navbar-brand" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex"></form>
          </div>
        </div>
      </nav>
    </div>
  );
}

import React from "react";

const hrtLogo = {
  width: "50px",
  borderRadius: "50%",
  filter: "brightness(1.2)",
};

const navBtn = {
  color: "white",
  marginLeft: "10px",
  padding: "10px",
  backgroundColor: "skyBlue",
  borderRadius: "10px",
};

const Header = () => {
  return (
    <div>
      <nav id='customNav' class='navbar navbar-expand-sm bg-light fixed-top'>
        <div class='container-fluid justify-content-start'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <img
                style={hrtLogo}
                id='hrtLogo'
                src='https://avatars.githubusercontent.com/u/76637730?v=4'
                alt='logo'
              />
            </li>
          </ul>
        </div>

        <div class='container-fluid justify-content-end'>
          <ul class='navbar-nav'>
            <li class='nav-item'>
              <a class='nav-link' style={navBtn} href='#1'>
                Initialization
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' style={navBtn} href='#2'>
                Deployment
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' style={navBtn} href='#3'>
                GettingStarted
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' style={navBtn} href='#4'>
                Advanced
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' style={navBtn} href='#4'>
                Demo
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

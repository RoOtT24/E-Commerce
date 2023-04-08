import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import cookie from "react-cookies";
import { forEach } from "lodash";


const Navbar = ({ token, setToken, setLoading }) => {
  const [pressed, setPressed] = useState(window.innerWidth>=600?false:true)
  function logout() {
    cookie.remove("guest_session_id");
    setToken(null);
    setLoading(true);
  }

  function myFunction() {
    const arr = document.getElementsByName("nav-item");
    for (let i = 0; i < arr.length; ++i) {
      if(!pressed)
        arr[i].id = styles.Link;
      
      else
        arr[i].id = styles.NotPressed;
    }
    setPressed(!pressed)
    
  }

  const linkStyle = (e) => {
    const arr = document.getElementsByName("nav-item");
    for (let i = 0; i < arr.length; ++i) {
      if(arr[i].innerHTML.toLowerCase() !== 'logout')
       arr[i].className = "";
    }
    e.target.className = styles.active;
    if(e.target.textContent.toLowerCase() === 'e commerce'){
     arr[0].className = styles.active;
    }
  };

  useEffect(() => {
   myFunction()
  }, []);
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.myContainer}`}>
        <div className={styles.flex}>
          <div className={`${styles.logoDiv}`}>
            <Link className="navbar-brand" to="/" onClick={linkStyle}>
             <h3>E Commerce</h3>
            </Link>
          </div>
            <div className={styles.topnav} id="myTopnav">
              {!token ? (
                <>
                  <Link
                    id={styles.Link}
                    to="/home"
                    onClick={linkStyle}
                    className={styles.active}
                    name={"nav-item"}
                  >
                    Home
                  </Link>
                  <Link
                    id={styles.Link}
                    to="/products"
                    onClick={linkStyle}
                    name={"nav-item"}
                  >
                    Products
                  </Link>
                  <Link
                    id={styles.Link}
                    to="/"
                    onClick={linkStyle}
                    name={"nav-item"}
                  >
                    Movies
                  </Link>
                  <Link
                    id={styles.Link}
                    to="/about"
                    onClick={linkStyle}
                    name={"nav-item"}
                  >
                    About
                  </Link>
                  <a
                    id={styles.Link}
                    onClick={logout}
                    className={styles.logout}
                    href="/"
                    name={"nav-item"}
                  >
                    logout
                  </a>
                </>
              ) : (
                <>
                 
                  <Link
                  onClick={linkStyle}
                    id={styles.Link}
                    to="/login"
                    className={styles.active}
                    name={"nav-item"}
                  >
                    Login
                  </Link> <Link onClick={linkStyle} id={styles.Link} to="/register" name={"nav-item"} >
                    Register
                  </Link>
                </>
              )}
            </div>{" "}
           
          </div> <Link className={styles.icon} onClick={myFunction}>
              <i
                className="fa fa-bars"
                style={{ float: "right", marginTop: "5px" }}
              />
            </Link>
      </div>
    </nav>
  );
};
export default Navbar;

import "./Navbar.css";
import logo from "../../assets/logoNav.png";

function Navbar() {
  return (
    <>
      {/* <nav>
        <a className="active" href="/">
          <img
            src={logo}
            className="logoImg"
            alt="logo"
            width="140px"
            height="70px"
          />
        </a>
        <div>
          <ul className="navbar">
            
              <a href="/">Home</a>
           
            
              <a href="/about">About us</a>
           
            
              <a href="/learning">Learning Modules</a>
           
            
              <a href="/services">Services</a>
           
            
              <a href="/contact">Contact Us</a>
           
            
              <a href="/">Book Online</a>
           
            
              <a href="/pagenotfound"></a>
           
          </ul>
        </div>
      </nav> */}

      <nav>
        <div className="logo">
          <img
            src={logo}
            className="logoImg"
            alt="logo"
            // width="140px"
            height="65px"
          />
        </div>
        <input type="checkbox" id="click" />

        <label htmlFor="click" className="check">
          <div className="menu n-b">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </label>
        <div className="un">
          <ul>
            <a href="/" className="active liv">
              Home
            </a>

            <a href="/about" className="liv">
              About us
            </a>

            <a href="/learning" className="liv">
              Learning Modules
            </a>

            <a href="/services" className="liv">
              Services
            </a>

            <a href="/contact" className="liv">
              Contact Us
            </a>

            <a href="/" className="liv">
              Book Online
            </a>

            {/* <a href="/pagenotfound" className="liv"></a> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

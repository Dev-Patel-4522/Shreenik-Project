import logo from './Images/logo.jpeg';
import './Navigation.css';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <div className='bar'>
		  <header>
			 <img className='logo' src={logo}alt=""/>
        <nav ref={navRef}>
          <a href="/#">Home</a>
          <a href="/aboutus">About us</a>
          <a href="/Distribution">Distribution</a>
          <a href="/Marketing">Marketing</a>
          <a href="/Licensing">Licensing</a>
          <a href="/Contactus">Contact us</a>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
		  </header>
    </div>
	);
}

export default Navbar;

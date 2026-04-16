import { useState } from "react";
import I2CLogo from "../assets/images/i2c-logo.png";
import "../assets/css/header-style.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="site-header" role="banner">
            <div className="container nav-inner">
                <a href="#" className="logo" aria-label="2C Home">
                    <img src={I2CLogo} alt="i2c logo"/>
                </a>

                <button
                    className="nav-toggle"
                    id="navToggle"
                    aria-label="Open navigation menu"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                </button>

                <nav
                    id="primaryNav"
                    className={`primary-nav ${isOpen ? 'open' : ''}`}
                    aria-label="Primary navigation"
                >
                    <ul role="list">
                        <li><a href="#about" onClick={() => setIsOpen(false)}>About us</a></li>
                        <li><a href="#registration" onClick={() => setIsOpen(false)}>Registration</a></li>
                        <li><a href="#careers" onClick={() => setIsOpen(false)}>Careers</a></li>
                        <li><a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Contact us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
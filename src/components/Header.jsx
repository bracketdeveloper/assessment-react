import React, { useState } from "react";
import logo from "../assets/images/i2c-logo.png";
import "../assets/css/header-style.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="site-header">
            <div className="container nav-inner">
                <a href="/" className="logo">
                    <img src={logo} alt="i2c Logo"/>
                </a>

                <button
                    className="nav-toggle"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    aria-controls="primaryNav"
                    onClick={toggleMenu}
                >
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                    <span className="hamburger-bar"></span>
                </button>

                <nav
                    id="primaryNav"
                    className={`primary-nav ${menuOpen ? "open" : ""}`}
                >
                    <ul className="nav-list">
                        <li><a href=""onClick={closeMenu}>About us</a></li>
                        <li><a href=""onClick={closeMenu}>Registration</a></li>
                        <li><a href=""onClick={closeMenu}>Careers</a></li>
                        <li>
                            <a href=""className="btn btn-primary" onClick={closeMenu}>
                                Contact us
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
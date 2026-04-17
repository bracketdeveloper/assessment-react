import React from 'react';
import "../assets/css/registration-style.css";
import RegistrationForm from "./RegistrationForm.jsx";

export default function RegistrationSection() {

    return (
        <section className="registration-section" id="registration">
            <div className="container reg-grid">
                <div className="reg-visual" aria-hidden="true">
                    <span className="dot dot-blue reg-dot-1"></span>
                    <span className="dot dot-black reg-dot-2"></span>
                    <span className="dot dot-blue reg-dot-3"></span>
                    <span className="dot dot-blue reg-dot-4"></span>
                    <span className="dot dot--picton-blue reg-dot-5"></span>
                    <span className="dot dot-cyan reg-dot-6"></span>
                    <span className="dot dot-orange reg-dot-7"></span>
                    <span className="dot dot-orange reg-dot-8"></span>
                </div>

                <div className="reg-card">
                    <RegistrationForm/>
                </div>
            </div>
        </section>
    );
}
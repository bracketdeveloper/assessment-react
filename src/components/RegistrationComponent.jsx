import React from 'react';
import "../assets/css/registration-style.css";
import RegistrationForm from "./RegistrationForm.jsx";

export default function RegistrationSection() {

    return (
        <section className="registration-section" id="registration">
            <div className="container reg-grid">
                <div className="reg-visual" aria-hidden="true">
                </div>

                <div className="reg-card">
                    <RegistrationForm/>
                </div>
            </div>
        </section>
    );
}
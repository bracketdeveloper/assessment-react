import React from 'react';
import "../assets/css/hero-style.css";
import user1 from "../assets/images/person-1.png";
import user2 from "../assets/images/person-2.png";
import user3 from "../assets/images/person-3.png";
import HeroTestimonialCard from "./HeroTestimonialCard.jsx";

export default function HeroSection() {
    const testimonials = [
        {
            id: 1,
            avatar: user1,
            name: "Andrew Schultz",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
        },
        {
            id: 2,
            avatar: user2,
            name: "Liam Alexander",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
        },
        {
            id: 3,
            avatar: user3,
            name: "Sophia Isabella",
            quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit."
        }
    ];

    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-text">
                    <h1>
                        Lorem ipsum <span className="highlight">dolor</span> sit amet yo{" "}
                        <span role="img" aria-label="waving hand">👋</span>
                    </h1>

                    <ul className="testimonial-list" aria-label="Customer Testimonials">
                        {testimonials.map((item) => (
                            <HeroTestimonialCard
                                key={item.id}
                                image={item.avatar}
                                name={item.name}
                                description={item.quote}
                            />
                        ))}
                        <li className="testimonial-card hidden-testimonial-card" aria-hidden="true"/>
                    </ul>
                </div>

                <div className="hero-visual" aria-hidden="true">
                    <div className="dot-container">
                        <span className="dot dot-orange dot-1"></span>
                        <span className="dot dot-blue dot-2"></span>
                        <span className="dot dot-yellow dot-3"></span>
                        <span className="dot dot-orange dot-4"></span>
                        <span className="dot dot-cyan dot-5"></span>
                        <span className="dot dot--picton-blue dot-6"></span>
                        <span className="dot dot-blue dot-7"></span>
                        <span className="dot dot-blue dot-8"></span>
                    </div>
                </div>

            </div>
        </section>
    );
}
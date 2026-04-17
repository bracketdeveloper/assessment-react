import React from 'react';

export default function HeroTestimonialCard({ image, name, description }) {
    return (
        <li className="testimonial-card">
            <div className="testimonial-avatar">
                <img
                    src={image}
                    alt=""
                    width="48"
                    height="48"
                    loading="lazy"
                />
            </div>
            <div className="testimonial-content">
                <p className="testimonial-name">
                    <strong>{name}</strong>
                </p>
                <p className="testimonial-body">
                    {description}
                </p>
            </div>
        </li>
    );
}
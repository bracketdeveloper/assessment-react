import React from 'react';

export default function FeatureItem({ image, title, description }) {
    return (
        <article className="feature-item">
            <div className="feature-icon" aria-hidden="true">
                <img
                    src={image}
                    alt=""
                    width="64"
                    height="64"
                    loading="lazy"
                />
            </div>
            <div className="feature-content">
                <h3 className="feature-title">
                    {title}
                </h3>
                <p className="feature-description">
                    {description}
                </p>
            </div>
        </article>
    );
}
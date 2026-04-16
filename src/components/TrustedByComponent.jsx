import { useState, useRef, useEffect } from "react";
import "../assets/css/trusted-style.css";
import MicrosoftLogo from "../assets/images/microsoft-logo.png";
import TwitterLogo from "../assets/images/twitter-logo.png";
import CocaCola from "../assets/images/coca-cola.png";

const TrustedByComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);

    const logos = [
        { src: MicrosoftLogo, alt: "Microsoft" },
        { src: TwitterLogo, alt: "Twitter" },
        { src: CocaCola, alt: "Coca Cola" },
        { src: MicrosoftLogo, alt: "Microsoft" },
        { src: TwitterLogo, alt: "Twitter" },
        { src: CocaCola, alt: "Coca Cola" },
    ];

    const visibleItems = 3;
    const maxIndex = logos.length - visibleItems;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const getTranslateX = () => {
        if (!trackRef.current) return 0;
        const itemWidth = trackRef.current.offsetWidth / visibleItems;
        return -(currentIndex * itemWidth);
    };

    return (
        <section className="trusted" aria-labelledby="trustedHeading">
            <div className="container trusted-inner">
                <h2 id="trustedHeading" className="section-title">Trusted by</h2>
                <p className="section-sub">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                    Vitae, in tristique senectus dui pharetra sit.
                </p>

                <div className="logos-carousel" role="region" aria-label="Partner logos carousel">
                    <button
                        className="carousel-btn"
                        onClick={handlePrev}
                        aria-label="Previous partners"
                    >
                        ‹
                    </button>

                    <div className="logos-track-wrapper">
                        <div
                            className="logos-track"
                            ref={trackRef}
                            style={{
                                transform: `translateX(${getTranslateX()}px)`,
                                transition: 'transform 0.3s ease-in-out',
                                display: 'flex'
                            }}
                        >
                            {logos.map((logo, index) => (
                                <div className="logo-item" key={index} style={{ flex: `0 0 ${100 / visibleItems}%` }}>
                                    <img src={logo.src} alt={logo.alt} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="carousel-btn"
                        onClick={handleNext}
                        aria-label="Next partners"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrustedByComponent;
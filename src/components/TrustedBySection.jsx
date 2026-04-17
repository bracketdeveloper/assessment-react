import { useState, useEffect } from "react";
import "../assets/css/trusted-style.css";
import microsoft from "../assets/images/microsoft-logo.png";
import twitter from "../assets/images/twitter-logo.png";
import cocacola from "../assets/images/coca-cola.png";

export default function TrustedBySection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(3);
    const totalItems = 6;

    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth <= 640) setVisibleItems(1);
            else if (window.innerWidth <= 900) setVisibleItems(2);
            else setVisibleItems(3);
        };

        updateVisibleItems();
        window.addEventListener("resize", updateVisibleItems);
        return () => window.removeEventListener("resize", updateVisibleItems);
    }, []);

    return (
        <section className="trusted">
            <div className="container trusted-inner">
                <h2 className="section-title">Trusted by</h2>
                <p className="section-sub">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Vitae, in tristique senectus dui pharetra sit.
                </p>

                <div className="logos-carousel">
                    <button
                        className="carousel-btn prev"
                        onClick={() => setCurrentIndex((prev) => (prev <= 0 ? totalItems - visibleItems : prev - 1))}
                    >
                        ‹
                    </button>

                    <div className="logos-track-wrapper">
                        <div
                            className="logos-track"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                            }}
                        >
                            <div className="logo-item" style={{ flex: `0 0 ${100 / visibleItems}%` }}>
                                <img src={microsoft} alt="Microsoft" />
                            </div>
                            <div className="logo-item" style={{ flex: `0 0 ${100 / visibleItems}%` }}>
                                <img src={twitter} alt="Twitter" />
                            </div>
                            <div className="logo-item" style={{ flex: `0 0 ${100 / visibleItems}%` }}>
                                <img src={cocacola} alt="Coca Cola" />
                            </div>
                            <div className="logo-item" style={{ flex: `0 0 ${100 / visibleItems}%` }}>
                                <img src={microsoft} alt="Microsoft" />
                            </div>
                            <div className="logo-item" style={{ flex: `0 0 ${100 / visibleItems}%` }}>
                                <img src={twitter} alt="Twitter" />
                            </div>
                            <div className="logo-item" style={{ flex: `0 0 ${100 / visibleItems}%` }}>
                                <img src={cocacola} alt="Coca Cola" />
                            </div>
                        </div>
                    </div>

                    <button
                        className="carousel-btn next"
                        onClick={() => setCurrentIndex((prev) => (prev >= totalItems - visibleItems ? 0 : prev + 1))}
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
}
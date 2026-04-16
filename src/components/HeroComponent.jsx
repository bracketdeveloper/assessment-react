import "../assets/css/hero-style.css"
import Person1 from "../assets/images/person-1.png";
import Person2 from "../assets/images/person-2.png";
import Person3 from "../assets/images/person-3.png";
import HeroTestimonialCard from "./HeroTestimonialCard.jsx";

const HeroComponent = () => {
    return (
        <section className="hero" aria-labelledby="heroHeading">
            <div className="container hero-grid">
                <div className="hero-text">
                    <h1 id="heroHeading">
                        Lorem ipsum <span className="highlight">dolor</span> sit amet yo 👋
                    </h1>

                    <ul className="testimonial-list" aria-label="Testimonials">
                        <HeroTestimonialCard image={Person1} name={"Andrew Schultz"}
                                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in\n" +
                                                 "                                    tristique senectus dui pharetra sit."}/>
                        <HeroTestimonialCard image={Person2} name={"Liam Alexander"}
                                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in\n" +
                                                 "                                    tristique senectus dui pharetra sit."}/>
                        <HeroTestimonialCard image={Person3} name={"Sophia Isabella"}
                                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in\n" +
                                                 "                                    tristique senectus dui pharetra sit."}/>
                        <li className="testimonial-card hidden-testimonial-card">

                        </li>
                    </ul>
                </div>

                <div className="hero-visual" aria-hidden="true">
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
        </section>
    )
}
export default HeroComponent
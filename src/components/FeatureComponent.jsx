import "../assets/css/feature-style.css"
import Padlock from "../assets/images/padlock.png";
import Chart from "../assets/images/chart.png";
import Trophy from "../assets/images/trophy.png";
import FeatureItem from "./FeatureItem.jsx";
const FeatureComponent = ()=>{
    return (
        <section className="features-strip" aria-labelledby="featuresHeading" id="about">
            <div className="container features-grid">
                <FeatureItem image={Padlock} title={"24/7 Support"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                <FeatureItem image={Chart} title={"1000+ reviews"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
                <FeatureItem image={Trophy} title={"And more!"}
                             description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}/>
            </div>
        </section>
    )
}
export default FeatureComponent
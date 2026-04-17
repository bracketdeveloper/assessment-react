import "../assets/css/feature-style.css";
import padlockIcon from "../assets/images/padlock.png";
import chartIcon from "../assets/images/chart.png";
import trophyIcon from "../assets/images/trophy.png";
import FeatureItem from "./FeatureItem.jsx";

const features = [
    {
        id: "1",
        icon: padlockIcon,
        label: "24/7 Support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: "2",
        icon: chartIcon,
        label: "1000+ reviews",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: "3",
        icon: trophyIcon,
        label: "And more!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];

export default function FeatureSection() {
    return (
        <section className="features-strip">
            <div className="container features-grid">
                {features.map((feature) => (
                    <FeatureItem
                        key={feature.id}
                        image={feature.icon}
                        title={feature.label}
                        description={feature.text}
                    />
                ))}
            </div>
        </section>
    );
}
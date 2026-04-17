import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import FeatureSection from "./components/FeatureSection.jsx";
import TrustedBySection from "./components/TrustedBySection.jsx";
import RegistrationComponent from "./components/RegistrationComponent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="page-wrapper">
            <Header/>
            <main id='main-content'>
                <div className="first-bg">
                    <HeroSection/>
                    <FeatureSection/>
                </div>
                <div className="second-bg">
                    <TrustedBySection/>
                    <RegistrationComponent/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default App

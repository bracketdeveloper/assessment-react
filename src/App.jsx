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
                <HeroSection/>
                <FeatureSection/>
                <TrustedBySection/>
                <RegistrationComponent/>
            </main>
            <Footer/>
        </div>
    )
}

export default App

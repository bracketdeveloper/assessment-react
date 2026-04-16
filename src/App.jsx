import Header from "./components/Header.jsx";
import HeroComponent from "./components/HeroComponent.jsx";
import FeatureComponent from "./components/FeatureComponent.jsx";
import TrustedByComponent from "./components/TrustedByComponent.jsx";
import RegistrationComponent from "./components/RegistrationComponent.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="page-wrapper">
            <Header/>
            <main id='main-content'>
                <HeroComponent/>
                <FeatureComponent/>
                <TrustedByComponent/>
                <RegistrationComponent/>
            </main>
            <Footer/>
        </div>
    )
}

export default App

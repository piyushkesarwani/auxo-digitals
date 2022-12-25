import "./App.css";
import { NavigationBar } from "./Components/NavigationBar";
import { Hero } from "./Components/Hero";
import { TrustedBy } from "./Components/TrustedBy";
import { Services } from "./Components/Services";
import { WhyChoose } from "./Components/WhyChoose";
import { WhoAreWe } from "./Components/WhoAreWe";
import { Testimonial } from "./Components/Testimonial";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="container">
      <div className="App">
        <NavigationBar />
        <Hero />
        <TrustedBy />
        <Services />
        <WhyChoose />
        <WhoAreWe />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

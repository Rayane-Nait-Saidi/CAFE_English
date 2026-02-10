 
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Walk from "./Walk";
import OpeningHours from "./OpeningHours";
import Footer from "./Footer";

const Index = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Walk/>
        <OpeningHours />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
import React from "react";
import Header from "./components/Header";
import FloatMenus from "./components/FloatMenus";
import SectionSlider from "./components/SectionSlider";
import Root from "./components/Root";
import GeneralDiagnostics from "./components/GeneralDiagnostics";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Specialists from "./components/Specialists";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="page-content">
        <div className="section mt-0">
          <FloatMenus />
          <SectionSlider />
        </div>
        <Root />
        <GeneralDiagnostics />
        <Services />
        <Faq />
        <Specialists />
        <Testimonials />
        <News />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;

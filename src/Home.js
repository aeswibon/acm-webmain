import React from "react";
import Navbar from "./UI/navbar";
import Header from "./Header";
import Activities from "./Activities";
import Timeline from "./Timeline";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./UI/footer";
function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Activities />
      <Timeline />
      <Services/>
      <Contact />
      <Footer/>
    </>
  );
}

export default Home;

import React from "react";
import Header from "layout/Header";
import Hero from "components/Hero";
import Outdoor from "components/Outdoor";
import Profile from "components/Profile";
import Adeventure from "components/Adeventure";
import Footer from "components/Footer";

function Home() {
  return (
    <Header>
      <main>
        <Hero />
        <Outdoor />
        <Profile />
        <Adeventure />
        <Footer />
      </main>
    </Header>
  );
}

export default Home;

import React from "react";
import Header from "layout/Header";
import Hero from "components/Hero";
import Outdoor from "components/Outdoor";

function Home() {
  return (
    <Header>
      <main>
        <Hero />
        <Outdoor />
      </main>
    </Header>
  );
}

export default Home;

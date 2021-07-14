import React from "react";
import Header from "layout/Header";
import Hero from "components/Hero";
import Outdoor from "components/Outdoor";
import Profile from "components/Profile";

function Home() {
  return (
    <Header>
      <main>
        <Hero />
        <Outdoor />
        <Profile />
      </main>
    </Header>
  );
}

export default Home;

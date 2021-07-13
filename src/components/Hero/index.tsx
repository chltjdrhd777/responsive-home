import React from "react";
import { heroSection, mainMessage } from "./e.index";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className={heroSection}>
      <div className="container">
        <article className={mainMessage}>
          <h3>The great outdoor</h3>
          <h1>Adventure</h1>
          <p>
            I never dreamed about success, I worked for it. Do not try to be
            origianl, just try to be good. Do not be afraid to give up the good
            to go for the great. If you cannot fly then run. If you cannot run,
            then walk. And if you cannot walk, then crawl, but whatever you do,
            you have to keep moving forward
          </p>

          <div className="cta">
            <Link to="#" className="btn">
              Book now
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Hero;

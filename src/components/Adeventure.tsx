import React from "react";
import { css } from "@emotion/css/macro";
import { Link } from "react-router-dom";

const adventureCSS = (function () {
  class CSSMaker {
    readonly adventureSection = css``;
    readonly adventureHeading = css``;
    readonly adventrueGird = css``;
  }

  return new CSSMaker();
})();

const { adventureSection, adventrueGird, adventureHeading } = adventureCSS;

function Adeventure() {
  return (
    <section className={adventureSection}>
      <div className="container">
        <div className="heading">
          <h3>Let the</h3>
          <h1>Adventure Begin</h1>
          <p>Loarem isaer sawefas, wqefasef, aweafaasef</p>
        </div>

        <div className="grid">
          <div>
            <p>
              test grid item 1test grid item 1test grid item 1test grid item
              1test grid item 1test grid item 1test grid item 1test grid item
              1test grid item 1test grid item 1
            </p>
          </div>

          <div>
            <p>
              test grid item 2test grid item 2test grid item 2test grid item
              2test grid item 2test grid item 2test grid item 2test grid item
              2test grid item 2
            </p>
          </div>

          <div>
            <p>
              test grid item 3test grid item 3test grid item 3test grid item
              3test grid item 3test grid item 3test grid item 3test grid item
              3test grid item 3
            </p>
          </div>
        </div>
      </div>

      <Link to="/" className="btn">
        Book your adventure
      </Link>
    </section>
  );
}

export default Adeventure;

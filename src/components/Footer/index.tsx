import React from "react";
import { css } from "@emotion/css/macro";

const footerCSS = (function () {
  class CSSMaker {
    readonly footer = css`
      padding: 6rem 0;
      text-align: center;
      background-color: #d7d4ed;
      color: rgba(0, 0, 0, 0.7);
    `;
  }

  return new CSSMaker();
})();

const { footer } = footerCSS;

function Footer() {
  return (
    <footer className={footer}>
      <p>&copy; 2021 Outers. All rights reserved</p>
    </footer>
  );
}

export default Footer;

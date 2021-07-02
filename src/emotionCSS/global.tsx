import React from "react";
import { Global, css } from "@emotion/react";
import { calcRem } from "emotionCSS/theme";

const globalCSS = css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p {
    font-size: 1.6rem;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }

  section {
    padding: 5rem 0;
  }

  .container {
    width: 100%;
    max-width: 98rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  body {
    background-color: cornflowerblue;
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;

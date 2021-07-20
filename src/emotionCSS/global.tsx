import React from "react";
import { Global, css } from "@emotion/react";
import { calcRem } from "emotionCSS/theme";
import { device } from "./theme";
import { mainMessage, heroSection } from "components/Hero/e.index";
import waveMedium from "images/wave-medium.png";

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

  h1 {
    font-family: "Aldrich", sans-serif;
    font-size: 2em;
    margin: 0.5rem 0 1rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  .container {
    width: 100%;
    max-width: 98rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .centering {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heading {
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 10rem;
    color: rgba(0, 0, 0, 0.7);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-gap: 2.5rem;
  }

  .btn {
    background-color: #eb648c;
    border-radius: 2rem;
    color: #fafafa;
    display: inline-block;
    margin-top: 2rem;
    padding: 1rem 2.5rem;
    &:hover {
      background-color: #ce587b;
    }
  }

  @media ${device.mobileM} {
    ${`.${mainMessage}`} {
      transform: translateY(40%);
    }
  }

  @media ${device.mobileL} {
    ${`.${heroSection}`} {
      &::before {
        height: 9.4rem;
        background: url(${waveMedium});
        background: cover;
      }
    }
  }
`;

function GlobalStyle() {
  return <Global styles={globalCSS} />;
}

export default GlobalStyle;

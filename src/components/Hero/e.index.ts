import { css } from "@emotion/css/macro";
import bg from "images/header-bg.jpg";
import wave from "images/wave-small.png";

const heroSection = css`
  height: 80vh;
  background: linear-gradient(
      135deg,
      rgba(50, 24, 131, 0.9) 10%,
      rgba(72, 56, 150, 0.9)
    ),
    url(${bg}) center no-repeat;

  background-size: cover;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4.7rem;
    background: url(${wave}) no-repeat center;
    background-size: cover;
  }

  & > .container {
    width: 100%;
    max-width: 50rem;
    color: #fafafa;
    text-transform: uppercase;
    transform: translateY(20%);
  }
`;

const mainMessage = css`
  & > h3 {
    font-size: 1.6rem;
  }

  & > h1 {
    font-size: 4rem;
    font-family: "Aldrich", sans-serif;
    margin: 1rem 0;
  }

  & > p {
    text-transform: lowercase;
  }

  & .btn {
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
`;

export { heroSection, mainMessage };

import { css } from "@emotion/css/macro";
import star from "images/stars.jpg";
import hiking from "images/hiking.jpg";
import camping from "images/camping.jpg";

const outDoorSection = css`
  padding: 0;
`;
const outDoorHeading = css`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10rem;
  color: rgba(0, 0, 0, 0.7);

  & > h1 {
    font-family: "Aldrich", sans-serif;
    font-size: 2em;
    margin: 0.5rem 0 1rem;
  }

  & > h3 {
    font-size: 1.4rem;
  }

  & > p {
    text-transform: lowercase;
  }
`;

const outDoorGrid = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 2.5rem;
`;
const outDoorGridItems = css`
  height: 40rem;
  padding: 5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  & > svg {
    font-size: 4rem;
    color: #eb648c;
  }

  & > h1 {
    font-family: "Aldrich", sans-serif;
    font-size: 1.7rem;
    text-transform: uppercase;
    margin: 2rem 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(50, 24, 131, 0.9) 10%,
      rgba(72, 56, 150, 0.9)
    );
    z-index: -1;
  }

  &:nth-of-type(1) {
    background: url(${star}) center no-repeat;
  }

  &:nth-of-type(2) {
    background: url(${hiking}) center no-repeat;
  }

  &:nth-of-type(3) {
    background: url(${camping}) center no-repeat;
  }
`;

export { outDoorSection, outDoorHeading, outDoorGrid, outDoorGridItems };

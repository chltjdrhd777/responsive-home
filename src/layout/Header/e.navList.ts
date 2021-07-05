import { css } from "@emotion/css/macro";

const navUl = css`
  background-color: #d7d4ed;
  width: 25rem;
  height: 100vh;
  position: fixed;
  top: 0;
  right: -26rem;
  z-index: 1500;
  flex-direction: column;
  transition: all 0.65s ease-in-out;

  &.active {
    right: 0;
  }

  & > li {
    margin: 1.5rem 0;
    font-size: 1.6rem;
    text-transform: uppercase;
    & > a {
      color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const menuClose = css`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  cursor: pointer;

  & > svg {
    color: #eb648c;
    font-size: 3rem;
  }
`;

export { navUl, menuClose };

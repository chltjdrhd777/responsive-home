import { css } from "@emotion/css/macro";
import { device } from "emotionCSS/theme";

const header = css`
  width: 100%;
  height: 5rem;
  /* position: absolute;
  top: 0;
  left: 0;
  z-index: 1; */
`;

const container = css``;

const nav = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0;

  & .nav-brand {
    width: 2rem;
  }

  & svg {
    color: white;
  }
`;

const menu = css`
  cursor: pointer;
`;

const headerMedia = css`
  /* @media ${device.tablet} {
    ${`.${nav}`} {
      align-items: center;
    }
  } */
`;

export { header, container, nav, menu, headerMedia };

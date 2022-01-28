import { css } from "styled-components";

export function mobile(style) {
  return css`
    @media only screen and (max-width: 480px) {
      ${style}
    }
  `;
}

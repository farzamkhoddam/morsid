import { css } from "styled-components";

const textAreaElementStyles = css`
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  padding: 16px;
  border: 1px solid;
  border-radius: 8px;
  border-color: var(--border-color-dark);
  appearance: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: var(--text-color-normal);
  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: var(--text-color-normal);
  }
  &:focus {
    outline: none !important;
    border: 4px solid var(--border-color-dark);
  }
`;

export default textAreaElementStyles;

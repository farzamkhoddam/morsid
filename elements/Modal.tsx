import Popup from "reactjs-popup";
import styled from "styled-components";

export const StyledPopup = styled(Popup)`
  &-overlay {
    padding: 1rem;
  }
  &-content {
    width: 99%;
    max-width: 745px;
    border-radius: 20px;
    padding: 0;
    max-height: 100vh;
  }
`;

export const CloseButton = styled.button`
  outline: none;
  cursor: pointer;
  position: absolute;
  display: block;
  padding: 2px 5px;
  line-height: 20px;
  right: 10px;
  top: 20px;
  font-size: 24px;
  background: #ffffff;
  border-radius: 18px;
  border: none;
  color: var(--text-color-normal);
`;

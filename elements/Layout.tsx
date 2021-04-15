import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: var(--page-max-width);
  font-family: Roboto;
  background-color: white;
  padding: 0 1rem;
`;

export const Paper = styled.section`
  background: #ffffff;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid #ededed;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.05);
  }
`;

import styled from "styled-components";
const Footer = (props) => {
  return (
    <Div>
      <Img src={"/Logo.png"} alt="logo" />
    </Div>
  );
};

export default Footer;

const Img = styled.img`
  max-width: 8rem;
  display: flex;
  justify-content: center;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

import styled from "styled-components";
const Footer = (props) => {
  return (
    <Container>
      <Img src={"/Logo.png"} alt="logo" />
    </Container>
  );
};

export default Footer;

const Img = styled.img`
  max-width: 8rem;
  display: flex;
  justify-content: center;
  object-fit: contain;
`;
const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  height: 2rem;
`;

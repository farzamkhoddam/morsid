import styled from "styled-components";
const Footer = () => {
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
  width: 100%;
  max-width: 100vw;
  justify-content: center;
  height: 2rem;
  position: absolute;
  bottom: 0;
  background-color: white;
`;

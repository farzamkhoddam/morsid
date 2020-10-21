import styled from "styled-components";
import Link from "next/link";
const Logo = (props) => {
  return (
    <div>
      <Link href="/">
        <Img src={"/Logo.png"} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;

const Img = styled.img`
  max-width: 10rem;
`;

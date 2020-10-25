import styled from "styled-components";
import Link from "next/link";

interface Props {
  className?: string;
}
const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
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

import styled, { CSSObject } from "styled-components";
import Link from "next/link";

interface Props {
  title: string;
  className?: string;
  to?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  clickHandler?: Function;
  childStyle?: CSSObject;
  type?: "primary" | "secondary";
}
const Button: React.FC<Props> = (props) => {
  return (
    <ButtonContainer {...props}>
      <Container
        type={props.type}
        style={props.childStyle}
        className={props.className}
      >
        {props.title}
      </Container>
    </ButtonContainer>
  );
};
export default Button;

const ButtonContainer: React.FC<Props> = ({
  children,
  to,
  clickHandler,
  className,
}) => {
  return to ? (
    <Link href={to}>
      <a
        className={className}
        onClick={() => {
          clickHandler && clickHandler();
        }}
      >
        {children}
      </a>
    </Link>
  ) : (
    <div
      className={className}
      onClick={() => {
        clickHandler && clickHandler();
      }}
    >
      {children}
    </div>
  );
};

const Container = styled.div<{ type?: "primary" | "secondary" }>`
  --padding: 20px;
  --margin: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding) calc(var(--padding) * 2);
  background: ${(props) =>
    props.type === "secondary"
      ? "var(--secondary-color-xlight)"
      : "var(--button-alternate-color)"};
  color: white;
  border-radius: 1px;
  text-decoration: none;
  appearance: none;
  border: none;
  font-size: inherit;
  line-height: 1;
  transition: background 0.3s linear;
  max-height: 3.5rem;
  width: 100%;
  &:hover {
    background-color: ${(props) =>
      props.type === "secondary" ? "white" : "var(--button-alternate-color)"};
    color: var(--secondary-color-light);
  }
  &.-outline {
    color: var(--primary-color-dark);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
    background: #fff;
    &:hover {
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.8);
      background: #f2f2f2;
    }
  }
  & + .button {
    margin-left: 20px;
  }
  .icon {
    display: inline-flex;
    &.-right {
      margin-left: var(--margin);
    }
    &.-left {
      margin-right: var(--margin);
    }
  }
`;

import styled, { CSSObject } from "styled-components";
import Link from "next/link";

interface Props {
  title: string;
  className?: string;
  to?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  clickHandler?: Function;
  childStyle?: CSSObject;
  type?: "glow" | "normal";
}
const Button: React.FC<Props> = (props) => {
  return (
    <ButtonContainer {...props}>
      <Container type={props.type} style={props.childStyle}>
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

const Container = styled.div<{ type?: "glow" | "normal" }>`
  --padding: 20px;
  --margin: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding) calc(var(--padding) * 2);
  background: ${(props) =>
    props.type === "glow"
      ? " radial-gradient(    100% 1655.01% at 0% 6.25%,    #d49844 0%,    #fee7b1 35.61%,    #fee6af 67.08%,    #f6c757 100%  );"
      : "var(--accent-color-normal)"};
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

import styled from "styled-components";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};

// Anchor props
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

// optionally use a custom type guard
function isPropsForAnchorElement(
  props: ButtonProps | AnchorProps,
): props is AnchorProps {
  return "href" in props;
}

function SimpleButton(props: ButtonProps | AnchorProps) {
  if (isPropsForAnchorElement(props)) {
    return <a {...props} />;
  } else {
    return <button {...props} />;
  }
}

const StyledSimpleButton = styled(SimpleButton)`
  --padding: 20px;
  --margin: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--padding) calc(var(--padding) * 2);
  background-color: ${(props) =>
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

export default StyledSimpleButton;

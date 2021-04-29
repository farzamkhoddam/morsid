import { useField } from "formik";
import styled, { CSSObject } from "styled-components";

interface Props {
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
  style?: CSSObject;
}

export function TextInput({ className, name, style, ...props }: Props) {
  const [field, { touched, error }] = useField(name);
  const hasError = touched && error ? true : false;
  return (
    <Container className={className} style={style}>
      <InputField {...field} {...props} hasError={hasError} />
      {hasError ? <span style={{ color: "red" }}>{error}</span> : null}
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 30px;
`;
export const InputField = styled.input<{ hasError?: boolean }>`
  width: 100%;
  height: 47px;
  max-width: 100%;
  padding: 16px;
  border: 1px solid;
  border-radius: 8px;
  appearance: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: var(--text-color-normal);
  border-color: ${({ hasError }) =>
    hasError ? "red" : "var(--border-color-dark)"};
  &::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    color: var(--text-color-normal);
  }
  &:focus {
    outline: none !important;
    border: 4px solid var(--border-color-dark);
  }
`;

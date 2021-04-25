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
    <Input className={className} hasError={hasError} style={style}>
      <input {...field} {...props} />
      {hasError ? <span style={{ color: "red" }}>{error}</span> : null}
    </Input>
  );
}
const Input = styled.div<{ hasError?: boolean }>`
  input {
    width: 100%;
    height: 47px;
    max-width: 100%;
    margin: 8px 0 30px;
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
  }
`;

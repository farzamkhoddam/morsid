import { useField } from "formik";
import styled from "styled-components";

const Input = styled.div<{ hasError?: boolean }>`
  input {
    border: 1px solid;
    border-color: ${({ hasError }) => (hasError ? "red" : "#000")};
  }
`;

interface Props {
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
}

export function TextInput({ className, name, ...props }: Props) {
  const [field, { touched, error }] = useField(name);
  const hasError = touched && error ? true : false;
  return (
    <Input className={className} hasError={hasError}>
      <input {...field} {...props} />
      {hasError ? <span>{error}</span> : null}
    </Input>
  );
}

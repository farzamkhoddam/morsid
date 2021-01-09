import { useField } from "formik";
import styled from "styled-components";
import { device } from "consts/theme";
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
const Input = styled.div<{ hasError?: boolean }>`
  input {
    width: 100%;
    max-width: 100%;
    margin: 8px 0 16px;
    padding: 16px;
    border: 6px solid;
    border-radius: 1px;
    appearance: none;
    font-size: 18px;
    font-weight: 600;
    border-color: ${({ hasError }) =>
      hasError ? "red" : "var(--primary-color-normal)"};
  }
  @media ${device.tablet}{
   width:100%;
  }
`;

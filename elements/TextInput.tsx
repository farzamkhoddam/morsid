import { useField } from "formik";
import styled, { CSSObject } from "styled-components";
import inputElementStyles from "./InputElementtStyle";

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
  max-width: 358px;
  margin-top: 0.5rem;
  margin-bottom: 30px;
`;
export const InputField = styled.input<{ hasError?: boolean }>`
  ${inputElementStyles};
`;

import { Field, useField } from "formik";
import styled, { CSSObject } from "styled-components";
import textAreaElementStyles from "./TextAreaElementStyle";

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
  style?: CSSObject;
  rows?: number;
}

export function Textarea({
  className,
  name,
  placeholder,
  style,
  rows,
  ...props
}: Props) {
  const [field, { touched, error }] = useField(name);
  // const hasError = touched && error ? true : false;
  return (
    <StyledTextarea
      {...field}
      {...props}
      // hasError={hasError}
      style={style}
      placeholder={placeholder}
      className={className}
      rows={rows}
      component="textarea"
    />
  );
}

const StyledTextarea = styled(Field)`
  ${textAreaElementStyles}
`;

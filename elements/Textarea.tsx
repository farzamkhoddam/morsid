import { Field, useField } from "formik";
import styled, { CSSObject } from "styled-components";

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
  const hasError = touched && error ? true : false;
  return (
    <StyledTextarea
      {...field}
      {...props}
      hasError={hasError}
      style={style}
      placeholder={placeholder}
      className={className}
      rows={rows}
      component="textarea"
    />
  );
}

const StyledTextarea = styled(Field)`
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  padding: 16px;
  border: 1px solid;
  border-radius: 8px;
  border-color: ${({ hasError }) =>
    hasError ? "red" : "var(--border-color-dark)"};
  appearance: none;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 23px;
  color: var(--text-color-normal);
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

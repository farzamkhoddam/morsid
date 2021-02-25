import styled from "styled-components";

import { Formik, Form } from "formik";
import { TextInput } from "components/TextInput";
import { device } from "consts/theme";
import * as yup from "yup";
import axios from "axios";

interface Props {
  vertical?: boolean;
  className?: string;
  submitLabel?: string;
}
interface FormValues {
  email: string;
}

const initialValues: FormValues = {
  email: "",
};

const LoginSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
});
const GetEmail: React.FC<Props> = ({
  className,
  vertical = false,
  submitLabel = "SUBSCRIBE",
}) => {
  return (
    <Container className={className}>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          try {
            await axios.post("/api/users/submit-email", values);
          } catch (e) {
            console.log("error=", e);
          }
          document.location.href = process.env.clickFunelPaymentUrl as string;
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              vertical={vertical}
            />
            <SubmitButton
              value={submitLabel}
              type="submit"
              disabled={isSubmitting}
              vertical={vertical}
            />
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};
export default GetEmail;
const Container = styled.div`
  width: 100%;
`;
const StyledForm = styled(Form)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
const Input = styled(TextInput)<{ vertical: boolean }>`
  width: ${({ vertical }) => (vertical ? "100%" : "70%")};
  height: 64px;
  input {
    margin: 0;
    height: inherit;
    border-color: gray;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const SubmitButton = styled.input<{ vertical: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ vertical }) => (vertical ? "100%" : "30%")};
  margin-top: ${({ vertical }) => (vertical ? "1rem" : "0")};
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
  background-image: linear-gradient(to right, #cda159, #fee7b1, #f5c34b);
  color: var(--primary-color-normal);
  border-radius: 1px;
  text-decoration: none;
  appearance: none;
  border: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  transition: background 0.3s linear;
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
  @media ${device.mobileL} {
    margin-top: 1rem;
    width: 100%;
    font-size: 95%;
  }
  @media ${device.mobileM} {
    font-size: 90%;
  }
  @media ${device.mobileS} {
    font-size: 80%;
  }
`;

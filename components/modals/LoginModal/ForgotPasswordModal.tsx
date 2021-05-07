import Button from "elements/Button";
import "reactjs-popup/dist/index.css";
import styled from "styled-components";
import { Body2, Caption, Title } from "elements/typo";
import * as yup from "yup";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import { TextInput } from "elements/TextInput";
import axios from "axios";
import { ForgetPasswordReqError } from "pages/api/users/reset-password";

interface FormValues {
  email: string;
}
const initialValues: FormValues = {
  email: "",
};
const ForgotSchema = yup.object().shape({
  email: yup.string().label("Email Address").email().required(),
});
interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ForgotModal = ({ setIsOpen }: Props) => {
  return (
    <Container>
      <Title
        style={{ marginBottom: "1.5rem", color: "var(--primary-color-dark)" }}
      >
        Forgot Password
      </Title>
      <Body2 style={{ marginBottom: "2rem" }}>
        Please enter your email to get the recovery password link
      </Body2>

      <Formik
        initialValues={initialValues}
        validationSchema={ForgotSchema}
        onSubmit={(values) => {
          axios
            .post("/api/users/reset-password/", values)
            .then(() => {
              toast.success("We send you a reset password link to your email."),
                setTimeout(function () {
                  setIsOpen(false);
                }, 3000);
            })
            .catch((e) => {
              const reqError: ForgetPasswordReqError = e?.response?.data;
              toast.error(reqError.error);
            });
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <Column>
              <Flex1>
                <Caption as="label" htmlFor={"email"}>
                  Email
                </Caption>
                <TextInput
                  name="email"
                  type="email"
                  placeholder="e.g jimmy@email.com"
                />
              </Flex1>
            </Column>

            <CTA label="Send link" type="submit" disabled={isSubmitting} />
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};
export default ForgotModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 745px;
  height: auto;
  background: #ffffff;
  border-radius: 20px;
  padding: 56px;
  padding-bottom: 68px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 358px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 100%;
`;

const Flex1 = styled.div`
  flex: 1;
  width: 100%;
`;
const CTA = styled(Button)`
  width: 195px;
  height: 54px;
  margin-bottom: 2.5rem;
`;

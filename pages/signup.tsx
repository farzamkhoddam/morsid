import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import ky from "ky/umd";
import * as yup from "yup";
import { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import { device } from "consts/theme";
import Image from "next/image";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
};

const SignupSchema = yup.object().shape({
  firstName: yup.string().label("First Name").required(),
  lastName: yup.string().label("Last Name").required(),
  email: yup.string().label("Email Address").email().required(),
  password: yup.string().min(8).label("Password").required(),
  confirmPassword: yup
    .string()
    .min(8)
    .label("Confirm Password")
    .oneOf(
      [yup.ref("password")],
      `Password and Confirm Password does not match`,
    )
    .required(),
});

export default function Signup() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[] | null>();
  return (
    <div className="account-page">
      <Container>
        <Background>
          <LeftDarkArea />
          <CenterArea>
            <DarkArea />
            <LightArea />
          </CenterArea>
        </Background>

        <Content>
          <HomeLinkContainer>
            <MenuRowDarkSide />
            <MenuRowLightSide>
              <MenuContainer>
                <Image
                  src="/ic24-home.svg"
                  alt="home icon"
                  width={24}
                  height={24}
                />
              </MenuContainer>
              <HomeMenu>home</HomeMenu>
            </MenuRowLightSide>
          </HomeLinkContainer>

          <H1>
            <DarkSide>
              <DarkSideText>SIGN UP TO &#013; PLAYBOOKS</DarkSideText>
            </DarkSide>
            <LightSide>DOWNLOAD</LightSide>
          </H1>
          <PicAndForm>
            <ImageContainer>
              <Image
                src="/signup.jpg"
                alt="header"
                // layout="responsive"
                objectFit="contain"
                width={400}
                height={495}
              />
            </ImageContainer>
            <FormContainer>
              <FormWrapper>
                {errors && errors.length > 0 ? (
                  <div>
                    {errors.map((err) => (
                      <div key={err}>{err}</div>
                    ))}
                  </div>
                ) : null}
                <Formik
                  initialValues={initialValues}
                  validationSchema={SignupSchema}
                  onSubmit={async (values) => {
                    setErrors(null);
                    try {
                      await ky
                        .post("/api/users/register", { json: values })
                        .json();
                      router.push("/login");
                    } catch (e) {
                      if (
                        e.name === "HTTPError" &&
                        e.response.status < 500 &&
                        e.response.status >= 400
                      ) {
                        const { errors } = await e.response.json();
                        setErrors(errors);
                      }
                    }
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <TextInput name="firstName" placeholder="firstName" />
                      <TextInput name="lastName" placeholder="Last Name" />
                      <TextInput
                        name="email"
                        type="email"
                        placeholder="Email Address"
                      />
                      <TextInput
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      <TextInput
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                      />
                      <ButtonsContainer>
                        <Button title="SIGN UP" type="normal" />
                      </ButtonsContainer>
                      <SigninContainer>
                        <SigninDesc>if you have an account, please</SigninDesc>
                        <SigninClickable>Sign in</SigninClickable>
                      </SigninContainer>
                    </Form>
                  )}
                </Formik>
              </FormWrapper>
            </FormContainer>
          </PicAndForm>
        </Content>
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-direction: column;
  width: 100%;
  max-width: var(--max-width-page);
`;
const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
const LeftDarkArea = styled.div`
  position: fixed;
  hegith: inherit;
  background-color: var(--primary-color-normal);
  height: inherit;
  width: 15%;
  left: 0;
  max-width: 100vh;
  @media ${device.tablet} {
    width: 100%;
    height: 15rem;
  }
`;
const CenterArea = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  max-width: var(--page-max-width);
  height: 100vh;
  @media ${device.tablet} {
    display: none;
  }
`;
const DarkArea = styled.div`
  background-color: var(--primary-color-normal);
  width: 40%;
  height: inherit;
`;
const LightArea = styled.div`
  width: 60%;
  height: inherit;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: -100vh;
`;
const HomeLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: var(--page-max-width);
  height: var(--header-height-desktop);
`;
const MenuContainer = styled.div`
  width: 24px;
`;
const HomeMenu = styled.h5`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  @media ${device.tablet} {
    color: white;
  }

  /* Text1 */

  color: #161515;
  z-index: 1;
`;
const PicAndForm = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 1rem;
  height: 60%;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  div {
    height: inherit;
    div {
      height: inherit;
      img {
        height: inherit;
      }
    }
  }
  @media ${device.tablet} {
    display: none;
  }
`;
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media ${device.tablet} {
    width: 100%;
  }
`;
const FormWrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  width: 100%;
  padding-left: 2rem;
  height: 100%;
`;
const H1 = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--page-max-width);
  margin: 0 1rem;
  text-align: left;
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 98px;
  letter-spacing: 0.095em;
  text-transform: uppercase;
  @media ${device.tablet} {
    height: 23%;
  }
`;
const MenuRowDarkSide = styled.div`
  width: 40%;
  height: inherit;
  color: white;
`;
const MenuRowLightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 60%;
  height: inherit;
  color: var(--primary-color-normal);
  padding-right: 1rem;
`;
const DarkSide = styled.div`
  width: 40%;
  color: white;

  margin: 0;
  text-align: right;
  padding-right: 0.5rem;
`;
const DarkSideText = styled.div`
  width: 61%;
  margin-left: auto;
  text-align: right;
  z-index: 2;
  @media ${device.tablet} {
    margin-bottom: 4rem;
  }
`;
const LightSide = styled.div`
  width: 60%;
  color: var(--primary-color-normal);
  padding-left: 0.5rem;
  margin: 0;
`;
const SigninContainer = styled.div`
  display: flex;
`;
const SigninDesc = styled.h5`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
`;
const SigninClickable = styled.span`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  color: var(--accent-color-normal);
  border-bottom: solid 1px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  @media ${device.mobileM} {
    flex-direction: column;
  }
`;

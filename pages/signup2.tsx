import { TextInput } from "components/TextInput";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import axios from "axios";
import * as yup from "yup";
import { useState } from "react";
import styled from "styled-components";
import Button from "components/Button";
import { device } from "consts/theme";
import Image from "next/image";
import { useWindowSize } from "hooks/useWindowSize";
import HomeIcon from "../public/ic24-home";

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
  const windowSize = useWindowSize();
  const isSmallDevice = windowSize.width <= 700 ? true : false;
  const [errors, setErrors] = useState<string[] | null>();

  return (
    <div className="account-page">
      <Container>
        <HomeButton>
          <HomeIcon />
          <HomeText>home</HomeText>
        </HomeButton>
        <Background>
          <LeftDarkSection>
            {isSmallDevice ? (
              <Title>
                <DarkSide>
                  <DarkSideText>{`SIGN UP TO Download`}</DarkSideText>

                  <DarkSideText>{`PLAYBOOKS`}</DarkSideText>
                </DarkSide>
              </Title>
            ) : (
              <Title>
                <DarkSide>
                  <DarkSideText>{`SIGN UP TO`}</DarkSideText>
                  <DarkSideText>{`PLAYBOOKS`}</DarkSideText>
                </DarkSide>
              </Title>
            )}
          </LeftDarkSection>
          <RightLightSection>
            <LightSide>
              <Title>DOWNLOAD</Title>
            </LightSide>
          </RightLightSection>
        </Background>

        <Content>
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
                      await axios.post("/api/users/register", { json: values });
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
                  {() => (
                    <Form>
                      
                      <SignupTextInput
                        name="firstName"
                        placeholder="firstName"
                      />
                      <SignupTextInput
                        name="lastName"
                        placeholder="Last Name"
                      />
                      <SignupTextInput
                        name="email"
                        type="email"
                        placeholder="Email Address"
                      />
                      <SignupTextInput
                        name="password"
                        type="password"
                        placeholder="Password"
                      />
                      <SignupTextInput
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                      />

                      <SignUpButton title="SIGN UP" type="normal" />

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
  width: 100%;
  max-width: var(--max-width-page);
  height: 100vh;
`;
const Background = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;
const HomeButton = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  height: var(--header-height-desktop);
  position: fixed;
  right: 8px;
  top: 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  z-index: 2;
  /* Text1 */
  color: var(--secondary-color-normal);
  @media ${device.tablet}{
    color:white;
  }
`;
const HomeText = styled.div`
  margin-right: 0.4rem;
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  z-index: 2;
`;

const PicAndForm = styled.div`
  display: flex;
  justify-content: center;
  max-width: var(--page-max-width);
  padding: 0 1rem;
  height: 65%;
  margin-top: 19rem;
  width: inherit;
  height: 57%;
  @media ${device.laptopL} {
    margin-top: 15rem;
    width: inherit;
    height: 65%;
  }

  @media ${device.laptop} {
    margin-top: 14rem;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  @media ${device.laptop} {
    width: 43%;
  }
  div {
    height: inherit;
    div {
      height: inherit;
      img {
        height: inherit;
      }
    }
  }
  @media ${device.tablet}{
    display: none;
  }
`;
const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media ${device.tablet}{
    width: 100%;
  }
`;
const FormWrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  width: 100%;
  padding-left: 2rem;
  height: 100%;
  padding-top: 1rem;
  @media ${device.laptop} {
    padding-top: 0rem;
  }
  @media ${device.mobileL} {
    display:flex;
    justify-content:center;
    margin-right:0;
    padding:0;
  }
  form {
    @media ${device.mobileL}{
      display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    }
    
  }
`;

const SignupTextInput = styled(TextInput)`
  @media ${device.laptop} {
    input {
    }
  }
`;
const LeftDarkSection = styled.div`
  width: auto;
  background-color: var(--primary-color-normal);
  height: inherit;
  padding-left: 20%;
  padding-top: 7rem;
  z-index: 1;
  @media ${device.laptopL} {
    padding-left: 27%;
  }
  @media ${device.laptop} {
    padding-left: 14%;
  }
  @media ${device.tablet} {
    position: absolute;
    top:0;
    height:25%;
    width:100%;
    padding-left:0
  }
`;
const RightLightSection = styled.div`
  width: auto;
  height: inherit;
  padding-top: 7rem;
  z-index: 1;
`;
const Title = styled.div`
  display: flex;
  margin: 0 1rem;
  text-align: left;
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 98px;
  letter-spacing: 0.095em;
  text-transform: uppercase;

  @media ${device.laptopL} {
    font-size: 50px;
    line-height: 60px;
    letter-spacing: 0.05em;
  }
  @media ${device.tablet} {
   display: flex;
   justify-content: center;
   
}
  @media ${device.mobileL}{
    font-size:2.5rem;
  }
  @media ${device.mobileM}{
    font-size:2rem;
  }
`;

const DarkSide = styled.div`
  color: white;
  margin: 0;
`;
const DarkSideText = styled.div`
  width: auto;
  margin-left: auto;
  text-align: left;
  z-index: 2;
  @media ${device.tablet}{
    display: flex;
    justify-content: center;
    
  }
`;
const LightSide = styled.div`
  width: 60%;
  color: var(--primary-color-normal);
  padding-left: 0.5rem;
  margin: 0;
  @media ${device.tablet}{
    display:none;
  }
`;
const SigninContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.06em;
  margin-right: 0.5rem;
  color: #4f4f4f;
  margin-top: 2rem;
  @media ${device.laptop} {
    font-size: 16px;
    letter-spacing: 0.03em;
  }
  @media ${device.tablet} {
    font-size: 3.3vw;
  }
  @media ${device.mobileL} {
    font-size: 3.8vw;
  }
`;
const SigninDesc = styled.div`
  margin-right: 0.5rem;
`;
const SigninClickable = styled.span`
  color: var(--accent-color-normal);
  border-bottom: solid 1px;
`;

const SignUpButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  width: 264px;
  height: 64px;
  @media ${device.mobileL}{
    width:100%;
  }
  `;

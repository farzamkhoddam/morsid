import { Formik, Form, Field } from "formik";
import { device } from "consts/theme";
import styled from "styled-components";
import LeftArrow from "components/Svgs/leftArrow";
import Stepper from "components/Stepper";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setStepNumber: Dispatch<SetStateAction<number>>;
}
interface formValue {
  confirm: string[];
}

export function Step2({ setStepNumber }: Props) {
  const initialValues: formValue = { confirm: [] };

  return (
    <Container>
      <Wrapper>
        <StyledStepper
          steps={["Feedback", "Details", "Review"]}
          activeStep={2}
        />
        <Formik
          initialValues={initialValues}
          //   validationSchema={step1Schema}

          onSubmit={async () => {
            try {
              setStepNumber(3);
            } catch {
              console.log("navid error");
            }
          }}
        >
          {({ values }) => {
            console.log("navid values==", values);
            return (
              <FormWrapper>
                <Section>
                  <H1>Are you sure you want to go?</H1>

                  <StyledForm>
                    <TwoSide>
                      <Side1>
                        <FirstH2>
                          I understand that by cancelling my plan. I’ll confirm
                          ...
                        </FirstH2>
                        <Checkboxs
                          role="group"
                          aria-labelledby="checkbox-group"
                        >
                          <Label>
                            <StyledField
                              type="checkbox"
                              name="confirm"
                              value="item1"
                            />
                            {`Access to special member discounts, and any new playbooks that are released.`}
                          </Label>
                          <Label>
                            <Field
                              type="checkbox"
                              name="confirm"
                              value="item2"
                            />
                            {`All the lessons, resources, and progress made in The Hustle Club Asset Vault`}
                          </Label>
                          <Label>
                            <Field
                              type="checkbox"
                              name="confirm"
                              value="item3"
                            />
                            {`My current lockd-in price. I understand that the price of a Hustle Club subscribtion is likely to increase in the future.`}
                          </Label>
                        </Checkboxs>
                        <Desc>Check all the boxes to continue ...</Desc>
                      </Side1>
                      <Side2>
                        <Side2Title>
                          You are about to confirm your Hustle Club membership
                        </Side2Title>
                        <Side2Subtitle>
                          <DesktopH3>Commitment:</DesktopH3>
                          <DesktopH3>
                            Monthly plan, Paid monthly - US$9/mo
                          </DesktopH3>
                          <MobileH3>
                            Commitment: Monthly plan, Paid monthly - US$9/mo
                          </MobileH3>
                        </Side2Subtitle>
                      </Side2>
                    </TwoSide>
                    <Buttonscontainer>
                      <BackButtonDiv onClick={() => setStepNumber(1)}>
                        <Arrow />
                        <p>Back</p>
                      </BackButtonDiv>
                      <SubmitButton
                        value="CONTINIUE"
                        type="submit"
                        // اگه آبجکت ولیوز خالی باشه، دکمه رو دیزیبل میکنه
                        disabled={values?.confirm?.length < 3}
                      />
                    </Buttonscontainer>
                  </StyledForm>
                </Section>
              </FormWrapper>
            );
          }}
        </Formik>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: var(--page-max-width);
  margin: 0 auto;
  width: inherit;
  height: inherit;
  padding: 4.5rem 22px 5rem 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media ${device.tabletL} {
    padding-right: 0;
    padding-left: 0;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  padding: 5rem 22px 4rem 22px;
  @media ${device.tabletL} {
    padding-top: 1rem;
  }
  @media ${device.mobileL} {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
const StyledStepper = styled(Stepper)`
  height: 5rem;
  width: 71%;
`;

const Section = styled.section`
  width: 100%;
`;
const StyledForm = styled(Form)`
  padding-top: 4rem;
  width: 100%;
`;
const TwoSide = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  @media ${device.tabletL} {
    flex-direction: column;
  }
`;
const Side1 = styled.div`
  width: 60%;
  @media ${device.tabletL} {
    width: 90%;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
const Side2 = styled.div`
  width: 40%;
  @media ${device.tabletL} {
    width: 100%;
    margin-bottom: 84px;
  }
`;
const H1 = styled.h1`
  position: absolute;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  @media ${device.tabletL} {
    font-size: 20px;
    line-height: 24px;
    padding-right: 22px;
  }
  @media ${device.mobileL} {
    padding-right: 1rem;
  }
`;
const H2 = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  @media ${device.tabletL} {
    font-size: 16px;
    line-height: 20px;
  }
`;
const FirstH2 = styled(H2)`
  margin-top: 3rem;
  margin-bottom: 0;
  @media ${device.tabletL} {
    margin-top: 1rem;
  }
  @media ${device.mobileM} {
    margin-top: 2rem;
  }
`;
const Side2Title = styled(H2)`
  margin-top: 3rem;
  width: 70%;
  line-height: 200%;
  @media ${device.tabletL} {
    margin-top: 0;
    width: fit-content;
    line-height: 100%;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  }
`;
const H3 = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #4f4f4f;
  @media ${device.tabletL} {
    font-size: 20px;
    line-height: 29px;
  }
`;
const DesktopH3 = styled(H3)`
  @media ${device.tabletL} {
    display: none;
  }
`;
const MobileH3 = styled(H3)`
  display: none;
  @media ${device.tabletL} {
    display: inline;
    text-align: center;
  }
`;
const Side2Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
    @media ${device.tabletL} {
      margin-right: 0.5rem;
    }
  }
  @media ${device.tabletL} {
    flex-direction: row;
  }
`;
const Checkboxs = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  width: 80%;
  label {
    margin-bottom: 1.87rem;
    color: #4f4f4f;
    input {
      margin-right: 12px;
    }
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
const StyledField = styled(Field)`
  background-color: red;
`;
const Desc = styled.p`
  margin-top: 2.63rem;
  margin-bottom: 79px;
  width: fit-content;
  text-align: center;
  color: #4f4f4f;
  @media ${device.tabletL} {
    margin-top: 40px;
    margin-bottom: 60px;
  }
`;

const Buttonscontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.input<{ disabled: boolean }>`
  margin-left: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.5rem;
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
    background:  ${({ disabled }) =>
      disabled ? "var(--gray-color-xlight)" : "var(--accent-color-normal)"};
  }
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
  @media ${device.tabletM}{
    width:15.75rem;
  }
  @media ${device.mobileL}{
      position: relative;
      margin:0 auto;
      right:0;
  }
`;
const BackButtonDiv = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  width: 89px;
  justify-content: space-between;
  @media ${device.tabletM} {
    width: 92px;
  }
`;
const Arrow = styled(LeftArrow)``;

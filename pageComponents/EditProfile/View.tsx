import Button from "components/Button";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import SimplePageHeader from "components/simplePageHeader";
import { device } from "consts/theme";
import styled from "styled-components";

import axios from "axios";
import { useRouter } from "next/router";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  handleLogout: () => void;
}
interface FormValues {
  name: string;
  email: string;
  newPassword: string;
  lastPassword: string;
}

const LoginSchema = yup.object().shape({
  Name: yup.string().label("Name").email().required(),
  email: yup.string().label("Email Address").email().required(),
  newPassword: yup.string().min(8).label("New Password").required(),
  lastPassword: yup.string().min(8).label("Last Password").required(),
});
export function EditProfileView({
  firstName,
  lastName,
  email,
  handleLogout,
}: Props) {
  const smartName = `${firstName} ${lastName}`;
  const initialValues: FormValues = {
    name: smartName,
    email: email,
    lastPassword: "",
    newPassword: "",
  };
  const router = useRouter();
  return (
    <div className="edit-profile-page">
      <SimplePageHeader activeItemIndex={2} />
      <Container>
        <Wrapper>
          <TitleContainer>
            <div>Profile</div>
          </TitleContainer>
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
              try {
                await axios.post("/api/users/login", values);
                const res = await axios.post<{ user: { subscribed: boolean } }>(
                  "/api/users/me",
                );
                console.log("navid success");
              } catch {
                console.log("navid error");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: "100%" }}>
                <Section>
                  <RowItem>
                    <Label>Name</Label>
                    <TextInput name="name" type="text" />
                  </RowItem>
                  <RowItem>
                    <Label>Email</Label>
                    <TextInput name="email" type="email" />
                  </RowItem>
                  <RowItem>
                    <Label>Last Password</Label>
                    <TextInput
                      name="lastPassword"
                      type="password"
                      placeholder="Enter Last Password"
                    />
                  </RowItem>
                  <RowItem>
                    <Label>New Password</Label>
                    <TextInput
                      name="newPassword"
                      type="password"
                      placeholder="Enter New Password"
                    />
                  </RowItem>
                  <Buttons>
                    <StyledButton
                      clickHandler={() => router.back()}
                      title={`Cancel`}
                      border={true}
                    />
                    <SaveButton
                      value="Save"
                      type="submit"
                      disabled={isSubmitting}
                    />
                  </Buttons>
                </Section>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Container>
    </div>
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
  padding: 0 2rem;
  padding-top: 11rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 4rem;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1d3330;
  width: 100%;
  max-width: var(--page-max-width);
  padding: 0 2rem;
  @media ${device.tabletL} {
    width: 100%;
  }
`;

const Section = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  @media ${device.tabletL} {
    width: 100%;
    flex-direction: column;
  }
  > :nth-child(odd) {
    // padding-right: var(--wcw);
  }
`;
const RowItem = styled.div`
  width: calc(50% - (var(--wcw) / 2));
  @media ${device.tabletL} {
    width: 100%;
  }
`;
const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.06em;
  text-transform: capitalize;
`;

const TextInput = styled(Field)`
    width: 100%;
    margin: 8px 0 3.125rem;
    padding: 16px;
    border: 1px solid;
    border-radius: 1px;
    appearance: none;
    font-size: 18px;
    font-weight: 600;
    border-color: var(--primary-color-normal)};
    overflow-wrap: anywhere;
    text-align: start;
    margin-bottom: 3rem;
    height: 64px;
    display: flex;
    align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;
  width: calc((2 * (6 * var(--bcw)+4 * var(--wcw)+var(--wcw))));
  @media ${device.tabletL} {
    width: 100%;
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
const SaveButton = styled.input`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: calc(50%);
  height: 64px;
  padding: var(--padding) calc(var(--padding) * 2);
  background: var(--accent-color-normal);
  color: var(--primary-color-normal);
  border-radius: 1px;
  text-decoration: none;
  appearance: none;
  border: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  transition: background 0.3s linear;
  margin-left: 11px;
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
    width: 100%;
    margin: 0;
  }
`;
const StyledButton = styled(Button)`
  width: 50%;
  height: 64px;
  margin-right: 11px;
  div {
    width: 100%;
  }
  @media ${device.mobileL} {
    width: 100%;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

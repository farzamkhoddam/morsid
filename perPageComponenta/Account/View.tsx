import SimplePageHeader from "components/simplePageHeader";

import styled from "styled-components";

import { setUserData } from "utils/auth-storage";
import { TextInput } from "components/TextInput";
import Button from "components/Button";
interface Props {
  firstName: string;
  lastName: string;
  email: string;
  handleLogout: () => void;
}

export function AccountView({
  firstName,
  lastName,
  email,
  handleLogout,
}: Props) {
  return (
    <div className="account-page">
      <SimplePageHeader />
      <Container>
        <div className="wrapper">
          <section className="article-header">
            <H1>Profile</H1>
            <Field>{`${lastName} - ${firstName}`}</Field>
            <Field>{email}</Field>
            <LogoutButtom
              title="Log Out"
              to={"/"}
              clickHandler={() => handleLogout()}
            />
          </section>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 16rem);
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;
  padding: 0 5rem;
`;
const H1 = styled.h1`
  color: var(--secondary-color-normal);
  margin-bottom: 2rem;
`;
const Field = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 8px 0 16px;
    padding: 16px;
    border: 6px solid;
    border-radius: 1px;
    appearance: none;
    font-size: 18px;
    font-weight: 600;
    border-color: var(--primary-color-normal)};
    overflow-wrap: anywhere;
    text-align: start;
    margin-bottom: 2rem;
    
`;
const LogoutButtom = styled(Button)`
  width: 100%;
`;

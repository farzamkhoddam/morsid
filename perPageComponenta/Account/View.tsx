import SimplePageHeader from "components/simplePageHeader";
import styled from "styled-components";
import SimpleButton from "components/SimpleButton";

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
        <Wrapper>
          <Section>
            <H1>Profile</H1>
            <Field>{`${lastName} - ${firstName}`}</Field>
            <Field>{email}</Field>
            <SimpleButton href="/logout" onClick={() => handleLogout()}>
              {"Logout"}
            </SimpleButton>
          </Section>
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
  height: calc(100vh - 16rem);
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 1068px;
  margin: 0 auto;
  width: inherit;
  padding: 0 10%;
`;
const Section = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const H1 = styled.h1`
  color: var(--primary-color-normal);
  margin-bottom: 2rem;
  font-size: 270%;
  text-align: center;
  line-height: 100%;
`;
const Field = styled.div`
    width: 100%;
    max-width: 36rem;
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
    height: 4.5rem;
    display: flex;
    align-items: center;
`;

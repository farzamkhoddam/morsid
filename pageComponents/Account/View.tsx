import Button from "components/Button";
import SimplePageHeader from "components/simplePageHeader";
import { device } from "consts/theme";
import styled from "styled-components";
import Link from "next/link";

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
      <SimplePageHeader activeItemIndex={2} />
      <Container>
        <Wrapper>
          <TitleContainer>
            <div>Profile</div>
            <LinksContainer>
              <Link href="/">
                <span>Edit Profile</span>
              </Link>
              <Link href="/">
                <UnsubTitle>Unsubscribe</UnsubTitle>
              </Link>
            </LinksContainer>
          </TitleContainer>

          <Section>
            <Label>Name</Label>
            <Field>{`${lastName} - ${firstName}`}</Field>
            <Label>Email</Label>
            <Field>{email}</Field>
            <StyledButton
              to="/logout"
              clickHandler={() => handleLogout()}
              title={`Logout`}
            />
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
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #333333;
  span {
    cursor: pointer;
    &:hover {
      color: var(--accent-color-normal);
    }
  }
  @media ${device.mobileL} {
    margin-top: 1rem;
  }
`;
const UnsubTitle = styled.div`
  margin-left: 4.25rem;
  @media ${device.mobileL} {
    margin-left: 3.25rem;
  }
`;
const Section = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 34.5rem;
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
  margin-right: auto;
`;

const Field = styled.div`
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
    margin-bottom: 2rem;
    height: 4rem;
    display: flex;
    align-items: center;
`;
const StyledButton = styled(Button)`
  width: 264px;
  height: 64px;
  margin-top: 1rem;
`;

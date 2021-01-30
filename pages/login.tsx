import AuthenticationLayout from "components/AuthenticationLayout";
import LoginForm from "pageComponents/login/formView";
import styled from "styled-components";
export default function Login() {
  return (
    <AuthenticationLayout title="Sign In For Instant Access To Your Hustle Playbooks">
      <LoginForm />
    </AuthenticationLayout>
  );
}


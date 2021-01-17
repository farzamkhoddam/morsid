import AuthenticationLayout from "components/AuthenticationLayout";
import SignupForm from "perPageComponenta/signup/formView";

export default function Signup() {
  return (
    <AuthenticationLayout title="Sign up to download the hustle Playbooks">
      <SignupForm />
    </AuthenticationLayout>
  );
}

import { Step2 } from "./Step2";
import SimplePageHeader from "components/simplePageHeader";
import { Viewer_viewer as User } from "wpapi";
import { useState } from "react";
import { Step1 } from "./Step1";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
interface Props {
  user: User;
}
export interface UnsubscribeFormData {
  why?: string[];
  otherDesc?: string;
}
export function UnsubscribeView({ user: { email, firstName }, user }: Props) {
  const [stepNumber, setStepNumber] = useState<number>(1);
  const [formData, setFormData] = useState<UnsubscribeFormData>(
    {} as UnsubscribeFormData,
  );
  let CurrentStep;
  switch (stepNumber) {
    case 1:
      CurrentStep = (
        <Step1
          name={firstName || "client"}
          setFormData={setFormData}
          setStepNumber={setStepNumber}
        />
      );
      break;
    case 2:
      CurrentStep = <Step2 setStepNumber={setStepNumber} />;
      break;
    case 3:
      CurrentStep = (
        <Step3
          email={email || "without email"}
          setStepNumber={setStepNumber}
          setFormData={setFormData}
          formData={formData}
        />
      );
      break;
    case 4:
      CurrentStep = <Step4 />;
      break;
    default:
      CurrentStep = <div />;

      break;
  }
  return (
    <div className="unsubscribe-page">
      <SimplePageHeader activeItemIndex={2} user={user} />
      {CurrentStep}
    </div>
  );
}

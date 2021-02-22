import Button from "components/Button";

import SimplePageHeader from "components/simplePageHeader";
import { device } from "consts/theme";
import styled from "styled-components";
import { Viewer_viewer as User } from "wpapi";
import { useRouter } from "next/router";
import { useState } from "react";
import { Step1 } from "./Step1";

interface Props {
  user: User;
}

export function UnsubscribeView({ user: { email, firstName } }: Props) {
  const router = useRouter();
  const [stepNumber, setStepNumber] = useState<number>(1);
  let CurrentStep;
  switch (stepNumber) {
    case 1:
      CurrentStep = <Step1 email="navid" name={firstName || "client"} />;
      break;

    default:
      CurrentStep = <div />;

      break;
  }
  return (
    <div className="unsubscribe-page">
      <SimplePageHeader activeItemIndex={2} />
      {CurrentStep}
    </div>
  );
}

import React, { ReactNode, useContext, useEffect, useState } from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import { Expert, EXPERT_LIST } from "consts/experts";
import { ExpertPageProps } from "pages/expert/[slug]";
import { modalsContext } from "contexts/modalContext";
import ExpertProfile from "./ExpertProfile";
import MaterialUIPickers from "./MaterialUIPickers";
import PaymentForm from "./PaymentForm";
import GetEmail from "./GetEmail";

export enum STEP {
  ExperProfile = 1,
  DateTimePicker = 2,
  PaymentForm = 3,
  GetEmail = 4,
}
export default function ExpertUi({ isLogin }: ExpertPageProps) {
  const router = useRouter();
  const { slug } = router.query;
  const currentExpert = EXPERT_LIST.find((expert) => expert.slug === slug);
  const [step, setStep] = useState<STEP>(STEP.GetEmail);
  let DynamicContent: ReactNode = (
    <ExpertProfile
      isLogin={isLogin}
      setStep={setStep}
      currentExpert={currentExpert || ({} as Expert)}
    />
  );
  switch (step) {
    case STEP.DateTimePicker:
      DynamicContent = (
        <MaterialUIPickers
          setStep={setStep}
          currentExpert={currentExpert || ({} as Expert)}
        />
      );
      break;
    case STEP.PaymentForm:
      DynamicContent = (
        <PaymentForm
          setStep={setStep}
          currentExpert={currentExpert || ({} as Expert)}
        />
      );
      break;
    case STEP.GetEmail:
      DynamicContent = (
        <GetEmail
          setStep={setStep}
          currentExpert={currentExpert || ({} as Expert)}
        />
      );
      break;
    default:
      break;
  }
  return (
    <PageLayout isLogin={isLogin}>
      <SEO />
      {DynamicContent}
    </PageLayout>
  );
}

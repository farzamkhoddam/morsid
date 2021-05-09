import React, { ReactNode, useContext, useEffect, useState } from "react";
import SEO from "../../components/seo";
import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import { Expert, EXPERT_LIST } from "consts/experts";
import { ExpertPageProps } from "pages/expert/[slug]";
import ExpertProfile from "./ExpertProfile";
import MaterialUIPickers from "./MaterialUIPickers";
import PaymentForm from "./PaymentForm";
import GetEmail from "./GetEmail";
import ElementsForm from "./ElementsForm";
import getStripe from "utils/stripe/get-stripe";
import { Elements } from "@stripe/react-stripe-js";

export enum STEP {
  ExperProfile = 1,
  DateTimePicker = 2,
  PaymentForm = 3,
  GetEmail = 4,
}
interface Props {
  pageProps: ExpertPageProps;
}

export default function ExpertUi({ pageProps }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const currentExpert = EXPERT_LIST.find((expert) => expert.slug === slug);
  const [step, setStep] = useState<STEP>(STEP.PaymentForm);
  let DynamicContent: ReactNode = (
    <ExpertProfile
      isLogin={pageProps.isLogin}
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
    <PageLayout isLogin={pageProps.isLogin}>
      <SEO />
      <Elements stripe={getStripe()}>
        {DynamicContent}
        <ElementsForm />
      </Elements>
    </PageLayout>
  );
}

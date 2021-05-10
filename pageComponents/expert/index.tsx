import SEO from "components/seo";
import PageLayout from "components/PageLayout";
import { useRouter } from "next/router";
import { Expert, EXPERT_LIST } from "consts/experts";
import ExpertProfile from "./ExpertProfile";
import { ExpertPageProps } from "pages/expert/[slug]";

export enum STEP {
  ExperProfile = 1,
  DateTimePicker = 2,
}
interface Props {
  pageProps: ExpertPageProps;
}
export default function ExpertUi({ pageProps }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const currentExpert = EXPERT_LIST.find((expert) => expert.slug === slug);

  return (
    <PageLayout isLogin={pageProps.isLogin}>
      <SEO />

      <ExpertProfile
        isLogin={pageProps.isLogin}
        currentExpert={currentExpert || ({} as Expert)}
      />
    </PageLayout>
  );
}

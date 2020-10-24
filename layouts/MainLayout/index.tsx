import Footer from "components/footer";
import SEO from "../../components/seo";
import type { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

export function MainLayout({ children, title }: Props) {
  return (
    <div className="page">
      <SEO title={title} />
      {children}
      <Footer />
    </div>
  );
}

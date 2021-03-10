import { ReactNode } from "react";
import { CSSObject } from "styled-components";
import { Viewer_viewer as User } from "wpapi";

interface Props {
  doesNotLogin: ReactNode;
  loginWithoutSubscribed: ReactNode;
  loginWithSubscribed?: ReactNode;
  className?: string;
  style?: CSSObject;
  user: User | null;
}
const SmartCompBaseOnLogin: React.FC<Props> = ({
  doesNotLogin,
  loginWithSubscribed,
  loginWithoutSubscribed,
  className,
  style,
  user,
}) => {
  let smartComponent = doesNotLogin;
  if (user?.subscribed) smartComponent = loginWithSubscribed;
  if (user?.subscribed === false) smartComponent = loginWithoutSubscribed;
  return (
    <div className={className} style={style}>
      {smartComponent}
    </div>
  );
};

export default SmartCompBaseOnLogin;

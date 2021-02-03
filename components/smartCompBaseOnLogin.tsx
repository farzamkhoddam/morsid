import { useUserData } from "hooks/useUserData";
import { ReactNode } from "react";
import { CSSObject } from "styled-components";

interface Props {
  doesNotLogin: ReactNode;
  loginWithoutSubscribed: ReactNode;
  loginWithSubscribed?: ReactNode;
  className?: string;
  style?: CSSObject;
}
const SmartCompBaseOnLogin: React.FC<Props> = ({
  doesNotLogin,
  loginWithSubscribed,
  loginWithoutSubscribed,
  className,
  style,
}) => {
  const { siginStatus } = useUserData();

  return (
    <div className={className} style={style}>
      {siginStatus !== "NOT-LOGINED"
        ? siginStatus === "SUBSCRIBED"
          ? loginWithSubscribed || loginWithoutSubscribed // in some cased  only things matter is logined or not. in this case we dont sent loginWithSubscribed
          : loginWithoutSubscribed
        : doesNotLogin}
    </div>
  );
};

export default SmartCompBaseOnLogin;

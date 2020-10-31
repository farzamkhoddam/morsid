import { ReactNode } from "react";
import { useUserData } from "utils/auth-storage";

interface Props {
  doesNotLogin: ReactNode;
  loginWithoutSubscribed: ReactNode;
  loginWithSubscribed?: ReactNode;
}
const SmartCompBaseOnLogin: React.FC<Props> = ({
  doesNotLogin,
  loginWithSubscribed,
  loginWithoutSubscribed,
}) => {
  const data = useUserData();

  return (
    <div>
      {data
        ? data.subscribed
          ? loginWithSubscribed || loginWithoutSubscribed // in some cased we dont onley things matter is logined or not. in this case we dont sent loginWithSubscribed
          : loginWithoutSubscribed
        : doesNotLogin}
    </div>
  );
};

export default SmartCompBaseOnLogin;

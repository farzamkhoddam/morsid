import React from "react";

import RegisterModal from "./modals/RegisterModal";
import { modalsContext } from "contexts/modalContext";
import { useContext } from "react";
import LoginModal from "./modals/LoginModal";

interface Props {
  currentTabIndex: number;
  isLogin: boolean;
}
const Modals = () => {
  // const { registerModal, setRegisterModal } = useContext(modalsContext);

  const { loginModal, setLoginModal } = useContext(modalsContext);

  return (
    <>
      {typeof window !== "undefined" && (
        // <RegisterModal isOpen={registerModal} setIsOpen={setRegisterModal} />
        <LoginModal isOpen={loginModal} setIsOpen={setLoginModal} />
      )}
    </>
  );
};

export default Modals;

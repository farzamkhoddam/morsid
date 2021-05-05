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
  const {
    loginModal,
    setLoginModal,
    registerModal,
    setRegisterModal,
  } = useContext(modalsContext);

  return (
    <>
      {typeof window !== "undefined" && (
        // هر زمان تنها یکی از این مدالها میتواند فعال باشد
        <>
          <RegisterModal isOpen={registerModal} setIsOpen={setRegisterModal} />
          <LoginModal isOpen={loginModal} setIsOpen={setLoginModal} />
        </>
      )}
    </>
  );
};

export default Modals;

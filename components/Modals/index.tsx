import React from "react";
import RegisterModal from "./RegisterModal";
import { modalsContext } from "contexts/modalContext";
import { useContext } from "react";
import LoginModal from "./LoginModal";
import LoadingModal from "./LoadingModal";

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
    loadingModal,
    setLoadingModal,
  } = useContext(modalsContext);
  const findActiveModal = () => {
    if (registerModal === true)
      return <RegisterModal isOpen={true} setIsOpen={setRegisterModal} />;
    else if (loginModal === true)
      return <LoginModal isOpen={true} setIsOpen={setLoginModal} />;
    else if (loadingModal === true)
      return <LoadingModal isOpen={true} setIsOpen={setLoadingModal} />;
    return null;
  };
  return <>{typeof window !== "undefined" && findActiveModal()}</>;
};

export default Modals;

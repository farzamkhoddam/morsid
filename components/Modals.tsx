import React from "react";

import RegisterModal from "./modals/RegisterModal";
import { modalsContext } from "contexts/modalContext";
import { useContext } from "react";

interface Props {
  currentTabIndex: number;
  isLogin: boolean;
}
const Modals = () => {
  const { registerModal, setRegisterModal } = useContext(modalsContext);

  return (
    <>
      {typeof window !== "undefined" && (
        <RegisterModal isOpen={registerModal} setIsOpen={setRegisterModal} />
      )}
    </>
  );
};

export default Modals;

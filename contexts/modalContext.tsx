import React, { useState } from "react";

type ModalContextType = {
  registerModal: boolean;
  setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
};
type Props = {
  children: React.ReactNode;
};

const modalsContext = React.createContext({} as ModalContextType);

function ModalsContextProvider({ children }: Props) {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <modalsContext.Provider
      value={{
        registerModal,
        setRegisterModal,
        loginModal,
        setLoginModal,
      }}
    >
      {children}
    </modalsContext.Provider>
  );
}
export { ModalsContextProvider, modalsContext };

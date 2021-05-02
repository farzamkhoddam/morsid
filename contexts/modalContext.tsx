import React, { useState } from "react";

type ModalContextType = {
  registerModal: boolean;
  setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
};
type Props = {
  children: React.ReactNode;
};

const modalsContext = React.createContext({} as ModalContextType);

function ModalsContextProvider({ children }: Props) {
  const [registerModal, setRegisterModal] = useState(false);

  return (
    <modalsContext.Provider
      value={{
        registerModal,
        setRegisterModal,
      }}
    >
      {children}
    </modalsContext.Provider>
  );
}
export { ModalsContextProvider, modalsContext };

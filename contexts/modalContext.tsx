import { ModalsActions, ModalsActionTypes } from "components/modals/interfaces";
import React, { useReducer, useState } from "react";

type ModalContextType = {
  registerModal: boolean;
  setRegisterModal: (state: boolean) => void;
  loginModal: boolean;
  setLoginModal: (state: boolean) => void;
};
type Props = {
  children: React.ReactNode;
};

const modalsContext = React.createContext({} as ModalContextType);
interface ModalState {
  registerModal: boolean;
  loginModal: boolean;
}
const initialState: ModalState = {
  registerModal: false,
  loginModal: false,
};

function reducer(state: ModalState, action: ModalsActions) {
  switch (action.type) {
    case ModalsActionTypes.EnableLoginModal:
      return { registerModal: false, loginModal: true } as ModalState;
    case ModalsActionTypes.DisableAllModal:
      return initialState;
    case ModalsActionTypes.EnableRegisterModal:
      return { registerModal: true, loginModal: false } as ModalState;
    default:
      throw new Error();
  }
}

function ModalsContextProvider({ children }: Props) {
  // const [registerModal, setRegisterModal] = useState(false);
  // const [loginModal, setLoginModal] = useState(false);
  const [modalSstate, modalsDispatch] = useReducer(reducer, initialState);
  const setRegisterModal = (state: boolean): void => {
    if (state) modalsDispatch({ type: ModalsActionTypes.EnableRegisterModal });
    else modalsDispatch({ type: ModalsActionTypes.DisableAllModal });
  };
  const setLoginModal = (state: boolean): void => {
    if (state) modalsDispatch({ type: ModalsActionTypes.EnableLoginModal });
    else modalsDispatch({ type: ModalsActionTypes.DisableAllModal });
  };
  return (
    <modalsContext.Provider
      value={{
        registerModal: modalSstate.registerModal,
        setRegisterModal,
        loginModal: modalSstate.loginModal,
        setLoginModal,
      }}
    >
      {children}
    </modalsContext.Provider>
  );
}
export { ModalsContextProvider, modalsContext };

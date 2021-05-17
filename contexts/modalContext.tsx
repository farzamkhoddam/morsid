import { ModalsActions, ModalsActionTypes } from "components/Modals/interfaces";
import React, { useReducer, useState } from "react";

type ModalContextType = {
  registerModal: boolean;
  setRegisterModal: (state: boolean) => void;
  loginModal: boolean;
  setLoginModal: (state: boolean) => void;
  loadingModal: boolean;
  setLoadingModal: (state: boolean) => void;
};
type Props = {
  children: React.ReactNode;
};

const modalsContext = React.createContext({} as ModalContextType);
interface ModalState {
  registerModal: boolean;
  loginModal: boolean;
  loadingModal: boolean;
}
const initialState: ModalState = {
  registerModal: false,
  loginModal: false,
  loadingModal: false,
};

function reducer(state: ModalState, action: ModalsActions) {
  switch (action.type) {
    case ModalsActionTypes.EnableLoginModal:
      return { ...initialState, loginModal: true } as ModalState;
    case ModalsActionTypes.EnableRegisterModal:
      return { ...initialState, registerModal: true } as ModalState;
    case ModalsActionTypes.EnableLoadingModal:
      return { ...initialState, loadingModal: true } as ModalState;

    case ModalsActionTypes.DisableAllModal:
      return initialState;
    default:
      throw new Error();
  }
}

function ModalsContextProvider({ children }: Props) {
  const [modalsState, modalsDispatch] = useReducer(reducer, initialState);
  const setRegisterModal = (state: boolean): void => {
    if (state) modalsDispatch({ type: ModalsActionTypes.EnableRegisterModal });
    else modalsDispatch({ type: ModalsActionTypes.DisableAllModal });
  };
  const setLoginModal = (state: boolean): void => {
    if (state) modalsDispatch({ type: ModalsActionTypes.EnableLoginModal });
    else modalsDispatch({ type: ModalsActionTypes.DisableAllModal });
  };
  const setLoadingModal = (state: boolean): void => {
    if (state) modalsDispatch({ type: ModalsActionTypes.EnableLoadingModal });
    else modalsDispatch({ type: ModalsActionTypes.DisableAllModal });
  };

  return (
    <modalsContext.Provider
      value={{
        registerModal: modalsState.registerModal,
        setRegisterModal,
        loginModal: modalsState.loginModal,
        setLoginModal,
        loadingModal: modalsState.loadingModal,
        setLoadingModal,
      }}
    >
      {children}
    </modalsContext.Provider>
  );
}
export { ModalsContextProvider, modalsContext };

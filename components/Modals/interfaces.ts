export enum ModalsActionTypes {
  EnableRegisterModal = "EnableRegisterModal",
  EnableLoginModal = "EnableLoginModal",
  EnableLoadingModal = "EnableLoadingModal",
  DisableAllModal = "DisableAllModal",
}
export interface ModalsActions {
  type: ModalsActionTypes;
}

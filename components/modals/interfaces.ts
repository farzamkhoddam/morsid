export enum ModalsActionTypes {
  EnableRegisterModal = "EnableRegisterModal",
  EnableLoginModal = "EnableLoginModal",
  DisableAllModal = "DisableAllModal",
}
export interface ModalsActions {
  type: ModalsActionTypes;
}

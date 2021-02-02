import { KEYs } from "consts/other";

export function setUserData(subscribed: boolean) {
  localStorage.setItem(KEYs.userDataKey, JSON.stringify({ subscribed }));
}

export function removeUserData() {
  localStorage.removeItem(KEYs.userDataKey);
}

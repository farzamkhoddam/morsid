import { useState } from "react";

const userDataKey = "user_data";

export function setUserData(subscribed: boolean) {
  localStorage.setItem(userDataKey, JSON.stringify({ subscribed }));
}

export function removeUserData() {
  localStorage.removeItem(userDataKey);
}

interface UserData {
  subscribed: boolean;
}

export function getUserData(): UserData | null {
  if (!process.browser) {
    return null;
  }

  const data = localStorage.getItem(userDataKey);
  if (data) {
    const jsonData = JSON.parse(data);
    return {
      subscribed: !!jsonData.subscribed,
    };
  }

  return null;
}

export function useUserData(): UserData | null {
  const [userData] = useState(() => getUserData());
  // TODO add listiner to onstorage changes and change the state
  return userData;
}

import { KEYs } from "consts/other";

interface UserData {
  siginStatus: "NOT-LOGINED" | "LOGINED-NOT-SUBSCRIBED" | "SUBSCRIBED";
}

function getUserData(): UserData {
  if (!process.browser) {
    return {
      siginStatus: "NOT-LOGINED",
    };
  }

  const data = localStorage.getItem(KEYs.userDataKey);
  if (data) {
    const jsonData: Record<KEYs.userDataKey, string> = JSON.parse(data);
    if (jsonData?.user_data)
      return {
        siginStatus: "SUBSCRIBED",
      };
    else
      return {
        siginStatus: "LOGINED-NOT-SUBSCRIBED",
      };
  } else
    return {
      siginStatus: "NOT-LOGINED",
    };
}

export function useUserData(): UserData {
  const userData = getUserData();

  // TODO add listiner to onstorage changes and change the state
  return userData;
}

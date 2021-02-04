// این هوک طول و عرض اسکرین رو برمیگردونه. اگه تو اس اس آر باشه، این مقادیر منفی یک خواهند بود
import { useEffect, useState } from "react";
export enum deviceTypes {
  "SERVER-SIDE",
  mobileS,
  mobileM,
  mobileL,
  tabletS,
  tabletM,
  tabletL,
  laptopXS,
  laptopS,
  laptopM,
  laptopL,
  desktop,
}
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

  type StateType = {
    width: number;
    height: number;
    deviceType: deviceTypes;
  };
  const [windowSize, setWindowSize] = useState<StateType>({
    width: -1,
    height: -1,
    deviceType: deviceTypes["SERVER-SIDE"],
  });

  // Handler to call on window resize
  function handleResize() {
    // Set window width/height to state
    let tempType = deviceTypes["SERVER-SIDE"];
    if (window?.innerWidth > 1440) tempType = deviceTypes.desktop;
    else if (window?.innerWidth > 1366) tempType = deviceTypes.laptopL;
    else if (window?.innerWidth > 1280) tempType = deviceTypes.laptopM;
    else if (window?.innerWidth > 1024) tempType = deviceTypes.laptopS;
    else if (window?.innerWidth > 800) tempType = deviceTypes.laptopXS;
    else if (window?.innerWidth > 768) tempType = deviceTypes.tabletL;
    else if (window?.innerWidth > 600) tempType = deviceTypes.tabletM;
    else if (window?.innerWidth > 425) tempType = deviceTypes.tabletL;
    else if (window?.innerWidth > 375) tempType = deviceTypes.mobileL;
    else if (window?.innerWidth > 325) tempType = deviceTypes.mobileM;
    else if (window?.innerWidth > 0) tempType = deviceTypes.mobileS;
    setWindowSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
      deviceType: tempType,
    });
  }
  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

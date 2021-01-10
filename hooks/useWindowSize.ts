// این هوک طول و عرض اسکرین رو برمیگردونه. اگه تو اس اس آر باشه، این مقادیر منفی یک خواهند بود
import { useEffect, useState } from "react";

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  type StateType = {
    width: number;
    height: number;
  };
  const [windowSize, setWindowSize] = useState<StateType>({
    width: -1,
    height: -1,
  });
  // Handler to call on window resize
  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      width: window?.innerWidth,
      height: window?.innerHeight,
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

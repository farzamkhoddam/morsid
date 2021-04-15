import { useState, useRef, useEffect } from "react";

function useHover() {
  const [hoverd, setHoverd] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  function enter() {
    setHoverd(true);
  }
  function leave() {
    setHoverd(false);
  }
  useEffect(() => {
    if (ref !== null && ref?.current !== undefined) {
      ref.current.addEventListener("mouseenter", enter);
      ref.current.addEventListener("mouseleave", leave);
    }

    return () => {
      ref.current.removeEventListener("mouseenter", enter);
      ref.current.removeEventListener("mouseleave", leave);
    };
  });
  return [hoverd, ref];
}

export default useHover;

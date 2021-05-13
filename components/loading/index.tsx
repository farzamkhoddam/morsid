import React from "react";
import styles from "./style.module.css";

interface Props {
  className?: string;
}

export default function Loading({ className }: Props) {
  return (
    <div className={className}>
      <div id="loadIcon" className={styles.loadIcon}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* <h2 style={{ color: "var( --text-color-normal)" }}>Loading...</h2> */}
    </div>
  );
}

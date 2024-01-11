"use client";
import Header from "./Header";
import * as Section from "./Section";
import styles from "./Main.module.css";
import React, { Suspense, useCallback } from "react";

const MainComponent = (): JSX.Element => {
  const onWheel = useCallback(
    (node: HTMLDivElement) => (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        node.scrollTo(0, node.scrollTop + window.innerHeight);
      } else {
        node.scrollTo(0, node.scrollTop - window.innerHeight);
      }
    },
    []
  );

  const divRefCallback = useCallback(
    (node: HTMLDivElement) => {
      if (node == null) {
        return;
      }
      node.addEventListener("wheel", onWheel(node), { passive: false });
    },
    [onWheel]
  );
  return (
    <>
      <Header />
      <div className={styles.slides} ref={divRefCallback}>
        <Section.BlueSection />
        <Section.WhiteSection />
        <Section.RedSection />
        <Section.SkillSection />
      </div>
    </>
  );
};

export default MainComponent;

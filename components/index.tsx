"use client";
import Header from "./Header";
import * as Section from "./Section";
import styles from "./Main.module.css";
import React, { useCallback } from "react";
import { ScrollWheelAdjust } from "./adjustScroll";

const MainComponent = (): JSX.Element => {
  const divRefCallback = useCallback(ScrollWheelAdjust, []);

  return (
    <>
      <Header />
      <div className={`${styles.slides} z-[1]`} ref={divRefCallback}>
        <Section.GateSection />
        <Section.IntroSection />
        <Section.CareerSection />
        <Section.ProjectSection />
        <Section.SkillSection />
      </div>
    </>
  );
};

export default MainComponent;

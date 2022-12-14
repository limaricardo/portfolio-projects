import React, { useEffect } from "react";
import styles from "../../styles/main.module.css";

import Curriculo from "../Curriculo/Curriculo";
import Hire from "../Hire/Hire";
import Nav from "./Nav";
import Projects from "../Projects/Projects";
import RedeSocial from "../Social/RedeSocial";
import Contact from "../Contact/Contact";

export const Main = () => {
  useEffect(() => {
    const element = document.getElementById("nav");
    element.scrollIntoView();
  }, []);

  return (
    <div id="mainContainer" className={styles.container}>
      <div className={styles.snapScroll}>
        <section className={styles.curriculo} id="curriculo">
          <Curriculo />
        </section>
        <section id="nav" className={styles.navigation}>
          <Nav />
        </section>
        <section id="redeSocial" className={styles.socialSection}>
          <RedeSocial />
        </section>
      </div>
      <div className={styles.snapScroll}>
        <section id="contact" className="contact">
          <Contact />
        </section>
        <section id="projects2" className="projects">
          <Projects />
        </section>
        <section id="hire" className="hire">
          <Hire />
        </section>
      </div>
    </div>
  );
};

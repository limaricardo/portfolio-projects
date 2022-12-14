import React from "react";
import styles from "../../styles/curriculo.module.css";
import { i18n } from "../../Translate/i18n";

const Skills = () => {
  return (
    <div className={styles.skillSection}>
      <div className={styles.skills}>
        <div>
          <h2 className={styles.h2Skills}>{i18n.t('curriculum.subtitles.skills')}</h2>
        </div>
        <div className={styles.skillsDiv}>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill1')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill2')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill3')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill4')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
           {i18n.t('curriculum.messages.skills.skill5')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill6')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill7')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill8')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill9')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill10')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill11')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill12')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill13')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill14')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.skills.skill15')}
          </p>
        </div>
        <div className={styles.idiomas}>
          <h2>{i18n.t('curriculum.subtitles.language')}</h2>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.idiom.idiom1')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.idiom.idiom2')}
          </p>
          <p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/7721/7721263.png"
              alt="Asterisk with style"
            />
            {i18n.t('curriculum.messages.idiom.idiom3')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Link } from "react-scroll";
import styles from "./LandingPage.module.css";
import { TumblrQuote } from "../../Components/LandingPage/TumblrQuote";
import { Auth } from "../../Components/LandingPage/Auth";
import { TermsLinks } from "../../Components/LandingPage/TermsLinks";
import { SectionB } from "../../Components/LandingPage/Sections/SectionB";
import { SectionC } from "../../Components/LandingPage/Sections/SectionC";
import { SectionD } from "../../Components/LandingPage/Sections/SectionD";
import { SectionE } from "../../Components/LandingPage/Sections/SectionE";
import { SectionF } from "../../Components/LandingPage/Sections/SectionF";

const arr = ["a", "b", "c", "d", "e", "f"];

export const LandingPage = () => {
  return (
    <div>
      <div className={styles.container} id="a">
        <Navbar page={"login"} />

        <div className={styles.radio}>
          {arr.map((el) => {
            return (
              <Link
                to={el}
                spy={true}
                activeClass={styles.active}
                smooth={true}
              >
                <div className={styles.radio_button}></div>
              </Link>
            );
          })}
        </div>
        <div className={styles.main}>
          <div className={styles.auth_container}>
            <TumblrQuote />
            <Auth />
          </div>
          <div className={styles.links}>
            <TermsLinks />
          </div>
        </div>
      </div>
      <div>
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
        <SectionF />
      </div>
    </div>
  );
};

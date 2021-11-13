import React from "react";
import { Link } from "react-router-dom";
import styles from "./TermsLinks.module.css";

const data = ["Terms", "Privacy", "Jobs", "Support"];

export const TermsLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {data.map((el) => {
          return (
            <Link to="/" key={el} className={styles.links_text}>
              {el}
            </Link>
          );
        })}
      </div>
      <div>Posted by Random</div>
    </div>
  );
};

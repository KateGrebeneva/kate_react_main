import React from "react";
import styles from "./Inputs.module.css"; // Импортируем стили

const Inputs = () => (
  <div>
    <input className={styles.input1} type="text" placeholder="Input 1" />
    <input className={styles.input2} type="text" placeholder="Input 2" />
    <input className={styles.input3} type="text" placeholder="Input 3" />
  </div>
);

export default Inputs;

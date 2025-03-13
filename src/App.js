import React from "react";
import styles from "./App.module.css";
import Inputs from "./components/Inputs";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h2 className={styles.title}>Task#110</h2>
        <Inputs />
      </div>
    </div>
  );
}

export default App;

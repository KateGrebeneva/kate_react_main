import React from "react";

function Verdict({ temp }) {
  let verdict;
  if (temp < 0) {
    verdict = "Вода замерзает (твердое состояние).";
  } else if (temp >= 100) {
    verdict = "Вода закипает (газообразное состояние).";
  } else {
    verdict = "Вода в жидком состоянии.";
  }

  return <div className="verdict">{verdict}</div>;
}

export default Verdict;

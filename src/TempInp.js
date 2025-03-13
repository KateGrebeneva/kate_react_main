import React from "react";

function TempInp({ temp, setTemp }) {
  return (
    <div className="temp-input">
      <label>Введите температуру воды (°C):</label>
      <input
        type="number"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />
    </div>
  );
}

export default TempInp;

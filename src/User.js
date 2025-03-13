import React from "react";

function User({ id, name, surname, age, isBanned, banUser }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
      <td>
        <span>{isBanned ? "Забанен" : "Не забанен"}</span>
        <button onClick={() => banUser(id)} disabled={isBanned}>
          {isBanned ? "Забанен" : "Забанить"}
        </button>
      </td>
    </tr>
  );
}

export default User;

import React from "react";

function User({ id, name, surname, age }) {
  return (
    <tr>
      <td>{id}</td> 
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </tr>
  );
}

export default User;

import React from "react";

function User({ user, toggleEditMode, editUser }) {
  return (
    <tr>
      <td>
        {user.isEdit ? (
          <input
            type="text"
            value={user.name}
            onChange={e => editUser(user.id, "name", e.target.value)}
          />
        ) : (
          user.name
        )}
      </td>
      <td>{user.isEdit ? (
          <input
            type="text"
            value={user.surname}
            onChange={e => editUser(user.id, "surname", e.target.value)}
          />
        ) : (
          user.surname
        )}</td>
      <td>
        {user.isEdit ? (
          <input
            type="number"
            value={user.age}
            onChange={e => editUser(user.id, "age", e.target.value)}
          />
        ) : (
          user.age
        )}
      </td>
      <td>
        <button onClick={() => toggleEditMode(user.id)}>
          {user.isEdit ? "Save" : "Edit"}
        </button>
      </td>
    </tr>
  );
}

export default User;
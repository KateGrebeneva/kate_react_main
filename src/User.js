import React from "react";
import UserField from "./UserField";

function User({ user, toggleEditMode, editUser }) {
  return (
    <tr>
      <td>
        <UserField
          id={user.id}
          text={user.name}
          type="name"
          isEdit={user.isEdit}
          editUser={editUser}
        />
      </td>
      <td>
        <UserField
          id={user.id}
          text={user.surname}
          type="surname"
          isEdit={user.isEdit}
          editUser={editUser}
        />
      </td>
      <td>
        <UserField
          id={user.id}
          text={user.age}
          type="age"
          isEdit={user.isEdit}
          editUser={editUser}
        />
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

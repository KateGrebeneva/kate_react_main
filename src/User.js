import React from 'react';
import UserField from './UserField'; // Подключаем компонент UserField

function User({ id, name, email, role, changeField }) {
  return (
    <tr>
      <UserField id={id} text={name} type="name" changeField={changeField} />
      <UserField id={id} text={email} type="email" changeField={changeField} />
      <UserField id={id} text={role} type="role" changeField={changeField} />
    </tr>
  );
}

export default User;

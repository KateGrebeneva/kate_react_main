function UserField({ id, text, type, isEdit, editUser }) {
    return isEdit ? (
      <input
        value={text}
        onChange={(event) => editUser(id, type, event.target.value)}
      />
    ) : (
      <span>{text}</span>
    );
  }
  
  export default UserField;
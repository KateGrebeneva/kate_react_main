import React, { useState } from "react";
import "./App.css"; // Подключаем стили

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Email: ${email}, Пароль: ${password}`);
  }

  return (
    <div className="login-container">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit}>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />
        <button type="submit" className="login-button">Войти</button>
      </form>
    </div>
  );
}

function EmailInput({ email, setEmail }) {
  return (
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="input-field"
    />
  );
}

function PasswordInput({ password, setPassword }) {
  return (
    <input
      type="password"
      placeholder="Пароль"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="input-field"
    />
  );
}

export default LoginForm;
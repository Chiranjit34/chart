import React from "react";

export default function Nav({ setIsLogin }) {
  const logoutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <header>
      <div className="logo">
        <h2>
          <p>Home</p>
        </h2>
      </div>
      <ul>
        <li onClick={logoutSubmit}>
          <p className="logOut">Logout</p>
        </li>
      </ul>
    </header>
  );
}

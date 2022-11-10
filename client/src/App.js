import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/Login";
import "./App.css";
import { api } from "./api";
// import Chart from "./components/Chart";
import Home from "./components/Home";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("tokenStore");
      if (token) {
        const verified = await axios.get(`${api}/users/verify`, {
          headers: { Authorization: token },
        });
        console.log(verified);
        setIsLogin(verified.data);
        if (verified.data === false) return localStorage.clear();
      } else {
        setIsLogin(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <div className="App">
      {isLogin ? (
        <Home setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}
      {/* <Login setIsLogin={setIsLogin} /> */}
    </div>
  );
}

export default App;

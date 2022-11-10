import React from "react";
import Nav from "./Nav";
import Charts from "./Chart";

export default function Home({ setIsLogin }) {
  return (
    <div className="notes-page">
      <Nav setIsLogin={setIsLogin} />
      <Charts />
    </div>
  );
}

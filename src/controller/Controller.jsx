import React from "react";
import { Link } from "react-router-dom";

const Controller = () => {
  return (
    <header
      className="App-header between container"
      style={{ padding: "10px 0", borderBottom: "1px solid var(--main_lines)", marginBottom: "20px"}}
    >
      <Link to={ "/" } style={{color: "var(--main_text)", textDecoration: "none", fontSize: "30px"}}>links controller</Link>
      <Link to="/links">
        <button style={{width: "100px", height: "35px", borderRadius: "8px", fontSize: "22px", cursor: "pointer"}}>
          new fav
        </button>
      </Link>
    </header>
  );
};

export default Controller;
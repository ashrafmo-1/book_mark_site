import React, { useState } from "react";

const Controller = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const handleClose = () => {
    setActive(false);
  };

  const styles = {
    addFav: {
      backgroundColor: "var(--main_lines)",
      color: "var(--main_text)",
      border: "none",
      padding: "6px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <header
      className="App-header between container"
      style={{ padding: "10px 0", borderBottom: "1px solid var(--main_lines)", marginBottom: "20px"}}
    >
      <h3>links controller</h3>
      <button style={styles.addFav} onClick={handleClick}>
        new fav
      </button>

      <div className={active ? "active" : ""} id="controls">
        <form
          style={{ backgroundColor: "var(--main_bg)" }}
        >
          <input id="name" type="name" placeholder="Enter Site Name" required />
          <input id="link" type="link" placeholder="Enter Your Link" required />
          <input id="text" type="text" placeholder="Enter Category" required />
          <button id="btn_submit" type="submit">save</button>
        </form>
        <span className="closeFavConroller" onClick={handleClose}>Done..?</span>
      </div>
    </header>
  );
};

export default Controller;

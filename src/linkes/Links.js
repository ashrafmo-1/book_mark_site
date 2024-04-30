import React from "react";

const Links = () => {
  return (
    <div className="links center col text_center">
      <div
        className="category center gap-3"
        style={{
          backgroundColor: "var(--main_lines)",
          padding: "3px 9px",
          borderRadius: "10px",
          width: "500px",
          margin: "auto",
          fontSize: "25px",
        }}
      >
        <span className="all" style={{ color: "#eee" }}>
          all
        </span>
        <span className="all" style={{ color: "#eee" }}>
          programming
        </span>
        <span className="all" style={{ color: "#eee" }}>
          fun
        </span>
        <span className="all" style={{ color: "#eee" }}>
          current
        </span>
      </div>
      <div className="boxes" style={{marginTop: "40px"}}>
        <div className="box">
          <h3 className="title">link title intro</h3>
          <a href="https:/google.com" className="link">
            run site
          </a>
          <span className="category">time add</span>
          <span style={{ display: "none" }}>time add</span>
        </div>
      </div>
    </div>
  );
};

export default Links;

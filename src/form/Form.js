import React, { useState, } from "react";

const Form = () => {
  const [siteName, setSiteName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://book-mark-urls.onrender.com/Bookmarks", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: siteName,
          url: link,
        })
      });
      if (response.ok) {
        alert("Data saved successfully!");
        setSiteName("");
        setLink("");
      } else {
        alert("Failed to save data.");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Error posting data.");
    }
  };

  return (
    <div className="center col" style={{ minHeight: "100vh" }}>
      <form className="flex col" style={{ backgroundColor: "var(--main_bg)" }} onSubmit={handleSubmit}>
        <input id="name" type="text" placeholder="Enter Site Name" required value={siteName} onChange={(e) => setSiteName(e.target.value)} />
        <input id="link" type="url" placeholder="Enter Your Link" required value={link} onChange={(e) => setLink(e.target.value)} />
        <button id="btn_submit" type="submit"> Save </button>
      </form>
    </div>
  );
};

export default Form;

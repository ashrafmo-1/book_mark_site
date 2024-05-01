import React, {useState, useEffect} from "react";

const Links = () => {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    const link = "https://book-mark-urls.onrender.com/Bookmarks";
    fetch(link).then(res => res.json()).then(data => setLinks(data));
  }, []);

  const all_links = links.map((link, index) => {
    return (
      <div className="box" key={index} style={{color: "var(--main_lines)"}}>
      <div className="category center" style={{backgroundColor: "red", color: "wheat", fontSize: "30px",marginBlock: "30px auto", width: "100%", height: "40px"}}>
          {link.Header}
      </div>
          <ul style={{width: "100%"}}>
            {link.Links.map((subLink, i) => (
              <li key={i} style={{backgroundColor: "var(--main_lines)", padding: "5px", marginBlock: "6px"}}>
                <a href={subLink.url} target="_blank" rel="noopener noreferrer" style={{color: "var(--main_text)",}}>{subLink.name}</a>
              </li>
            ))}
          </ul>
      </div>
    );
  });

  return (
    <div className="links center col text_center">
      <div className="boxes" style={{marginTop: "40px"}}>
        {all_links}
      </div>
    </div>
  );
};

export default Links;

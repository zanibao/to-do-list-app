import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <h3>"Sometimes you change things, but that doesn't <br />mean you don't have a plan."</h3> 
        <h4>― Jordan Hoechlin</h4>
        <br />
    <small>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open source code {""}
      </a>
      by {""}{" "}
      <a
        href="https://www.linkedin.com/in/anazanibao/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ana Paula Zanibão
      </a>
    </small>
    </div>
  );
}

import React from "react";
import meme from "../img/meme.png";

function Header() {
  return (
    <section className="header">
      <img src={meme}></img>
      <h1>Meme Generator</h1>
      <img src={meme}></img>
    </section>
  );
}

export default Header;

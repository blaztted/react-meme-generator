import React from "react";
import meme from "../img/meme.png";

function Header() {
  return (
    <header>
      <img src={meme}></img>
      <h2>Meme Generator</h2>
      <img src={meme}></img>
    </header>
  );
}

export default Header;

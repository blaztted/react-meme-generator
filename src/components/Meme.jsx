import React from "react";
import memesData from "../memesData.js";

function Meme() {
  let url;

  function handleClick(e) {
    e.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
    console.log(url);
  }

  return (
    <main>
      <p>{url}</p>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={handleClick} className="form--button">
          Create a new meme image 🖼
        </button>
      </form>
    </main>
  );
}

export default Meme;

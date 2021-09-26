import React from "react";
import "./styles.css";
import { useState } from "react";
import Background from "/src/image/music.svg";

const songDB = {
  Kannada: [
    {
      name: "Innunu Bekagide",
      rating: "4.5/5"
    },
    {
      name: "Soul of Dia",
      rating: "4/5"
    },
    {
      name: "Marali manasagide",
      rating: "3.5/5"
    }
  ],

  English: [
    {
      name: "Memories",
      rating: "4/5"
    },
    {
      name: "Family",
      rating: "4.5/5"
    },
    {
      name: "The Game is On",
      rating: "4.5/5"
    }
  ],
  Hindi: [
    {
      name: "Tare Gin",
      rating: "4/5"
    },
    {
      name: "Akh Lad Jaave",
      rating: "4.5/5"
    },
    {
      name: "Ishq Tera",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Kannada");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div
      className="App"
      style={{
        margin: "0px",
        backgroundImage: `url(${Background})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "relative"
      }}
    >
      <h1>🎼Goodsongs!!</h1>
      <p style={{ color: "#DB27779" }}>
        The heart always knows which song to hum...<strong>:)</strong>
      </p>
      <h2 style={{ fontSize: "smaller", color: "#DB2777" }}>
        Checkout for some good songs. Select a language to see..
      </h2>
      <div>
        {Object.keys(songDB).map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {songDB[selectedGenre].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none"
              }}
            >
              <div
                style={{
                  //color: "#38CE64",
                  // color: "#0BB33A",
                  color: "#000000",
                  padding: "1rem 1rem",
                  textAlign: "center"
                }}
              >
                {/* <a href="https://developer.spotify.com/web-api/console/get-artist/"> */}
                <h4
                  style={{
                    fontSize: "22px",
                    margin: "1px"
                  }}
                >
                  {song.name}
                </h4>
                <small>{song.rating}</small>
                {/* </a> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

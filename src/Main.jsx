import Data from "./Data";
import View from "./View";
import Header from "./Header";
import { useState } from "react";
import Footer from "./Footer";

const Main = () => {
  const [artist, setArtist] = useState("Arijit Singh");
  const nameHandler = (name) => {
    setArtist(name);
    console.log(Data[artist]);
  };

  return (
    <>
      <Header />
      <div>
        <h3 style={{ textAlign: "center" }}>You Will 💖 our Music Store🎶</h3>
        <p style={{ textAlign: "center", color: "#be185d" }}>
          Checkout my Favourite Musics. Select an Artist to get Started!!
        </p>
      </div>
      <div
        style={{
          padding: "10px 0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Object.keys(Data).map((name) => {
          if (artist === name) {
            return (
              <span
                onClick={() => nameHandler(name)}
                key={name}
                style={{
                  padding: "10px 20px",
                  cursor: "pointer",
                  border: "1px solid #be185d",
                  margin: "0px 20px",
                  fontWeight: "bold",
                  color: "#be185d",
                  backgroundColor: "#fce7f3",
                  borderRadius: "0.5rem",
                }}
              >
                {name}
              </span>
            );
          }
          return (
            <span
              key={name}
              onClick={() => nameHandler(name)}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                border: "1px solid #be185d",
                margin: "0px 20px",
                borderRadius: "0.5rem",
              }}
            >
              {name}
            </span>
          );
        })}
      </div>

      <div>
        {Data[artist].map((song) => {
          return (
            <View
              key={song.name}
              name={song.name}
              rating={song.rating}
              src={song.src}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Main;

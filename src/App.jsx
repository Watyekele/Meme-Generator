import { useState } from "react";
import { useEffect } from "react";
import Meme from "./Meme";
import Header from "./Header";
import "./App.css";

function App(props) {
  const [getImages, setgetImages] = useState(null);
  const [starWarsData, setStarWarsData] = useState(null);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);

  function fetchMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        const memes = data.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomIndex];
        setgetImages(randomMeme.url);
      });
  }

  useEffect(() => {
    fetchMeme();
  }, []);

  // useEffect(() => {
  //   fetch(`https://swapi.dev/api/people/ ${count}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //       setStarWarsData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error Loading Data:", error);
  //       setLoading(false);
  //     });
  // }, [count]);

  return (
    <div className="Meme-poster w-[60%] m-auto text-white border-2 border-white  m-4">
      <Header />
      <Meme image={getImages} handleClick={fetchMeme} />
      {/* <button
        onClick={function () {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Get new Member
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : starWarsData ? (
        <div>
          <p>
            <strong>Name:</strong>
            {starWarsData.name}
          </p>
          <p>
            <strong>Height:</strong>
            {starWarsData.height}
          </p>
          <p>
            <strong>Mass:</strong>
            {starWarsData.mass}
          </p>{" "}
          <p>
            <strong>Hair-color:</strong>
            {starWarsData.hair_color}
          </p>
        </div>
      ) : (
        <p>There is no Data</p>
      )} */}
    </div>
  );
}

export default App;

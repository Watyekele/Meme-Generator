import { useState } from "react";
import { useEffect } from "react";

export default function Meme(props) {
  const [items, setItems] = useState({
    topText: "SHUT UP!",
    bottomText: "AND TAKE MY MONEY",

    image: props.image,
  });

  useEffect(() => {
    setItems((prevMeme) => ({
      ...prevMeme,
      image: props.image,
    }));
  }, [props.image]);

  function handleChange(event) {
    const { name, value } = event.currentTarget;
    setItems((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div>
        <section className="form">
          {" "}
          <label htmlFor="">
            Top text
            <input
              type="text"
              className="first"
              placeholder="SHUT UP!"
              value={items.topText}
              name="topText"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Bottom text
            <input
              type="text"
              className="second"
              name="bottomText"
              placeholder="AND TAKE MY MONEY"
              value={items.bottomText}
              onChange={handleChange}
            />
          </label>
          <button onClick={props.handleClick}>Get a new meme image 🖼</button>
        </section>
        <section className="meme">
          <img src={items.image} alt="" />
          <span className="top">{items.topText}</span>
          <span className="bottom">{items.bottomText}</span>
        </section>
      </div>
    </main>
  );
}

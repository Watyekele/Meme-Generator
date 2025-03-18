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
        <section className="form flex flex-col shrink-1 items-center justify-center gap-2 p-2">
          <section className="labels flex ">
            {" "}
            <label className="text-left" htmlFor="">
              Top text
              <input
                type="text"
                className="first w-[80%]  border border-white indent-2 text-left"
                placeholder="SHUT UP!"
                value={items.topText}
                name="topText"
                onChange={handleChange}
              />
            </label>
            <label className="text-left" htmlFor="">
              Bottom text
              <input
                type="text"
                className="second w-[80%] border indent-2  "
                name="bottomText"
                placeholder="AND TAKE MY MONEY"
                value={items.bottomText}
                onChange={handleChange}
              />
            </label>
          </section>

          <section>
            <button onClick={props.handleClick}>Get a new meme image 🖼</button>
          </section>
        </section>
        <section className="meme flex flex-col relative items-center justify-center w-2xs h-3/4 m-auto">
          <img src={items.image} alt="" className="max-w-full max-h-full" />
          <span className="top absolute mt-2 mb-20 text-2xl">
            {items.topText}
          </span>
          <span className="bottom absolute mt-20 mb-2 text-2xl">
            {items.bottomText}
          </span>
        </section>
      </div>
    </main>
  );
}

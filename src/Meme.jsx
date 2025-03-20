import { useState } from "react";
import { useEffect } from "react";

export default function Meme(props) {
  const [items, setItems] = useState({
    topText: "KEEP CALM!",
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
                className="first w-[80%]  border border-white indent-2 text-left rounded-sm opacity-[50%]"
                placeholder="KEEP CALM!"
                value={items.topText}
                name="topText"
                onChange={handleChange}
              />
            </label>
            <label className="text-left" htmlFor="">
              Bottom text
              <input
                type="text"
                className="second w-[80%] border indent-2 rounded-sm opacity-[50%] "
                name="bottomText"
                placeholder="AND TAKE MY MONEY"
                value={items.bottomText}
                onChange={handleChange}
              />
            </label>
          </section>

          <section>
            <button
              onClick={props.handleClick}
              className="bg-gradient-to-r from-[#672280] to-[#a626d3] p-1 rounded-sm mt-2 cursor-pointer hover:opacity-80 transition duration-300 "
            >
              Get a new meme image 🖼
            </button>
          </section>
        </section>
        <section className="meme flex flex-col relative items-center justify-center w-2xs overflow-hidden h-3/4 m-auto mt-4 mb-4 ">
          <img
            src={items.image}
            alt=""
            className="image max-w-full max-h-full object-cover h-auto rounded-md"
          />
          <span className="top absolute  text-2xl top-0 px-4 font-bold shadow-md font-serif ">
            {items.topText}
          </span>
          <span className="bottom absolute  text-2xl bottom-0 px-4 font-bold shadow-md font-serif uppercase ">
            {items.bottomText}
          </span>
        </section>
      </div>
    </main>
  );
}

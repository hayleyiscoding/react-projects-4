import React from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

export default function App() {
  const [color, setColor] = React.useState("");
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState(new Values("#e1fff6").all(10));

  function handleSubmit(event) {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }
  return (
    <>
      <section className='container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='color'>Color Generator</label>
          <input
            type='text'
            name='color'
            placeholder='Type a color/hex code'
            id='color'
            value={color}
            onChange={(event) => setColor(event.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button type='submit'>Submit</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

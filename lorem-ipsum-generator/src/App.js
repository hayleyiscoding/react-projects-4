import React from "react";
import data from "./data";

export default function App() {
  const [text, setText] = React.useState([]);
  const [count, setCount] = React.useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
    console.log("hello World");
  }

  return (
    <div className='container'>
      <header>
        <h1>Tired of boring Lorem Ipsum?</h1>
      </header>
      <main>
        <section>
          <form onSubmit={handleSubmit}>
            <label htmlFor='amount'>Paragraphs:</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={count}
              onChange={(event) => setCount(event.target.value)}
            />
            <button type='submit'>Generate</button>
          </form>
          <article>
            {text.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
          </article>
        </section>
      </main>
    </div>
  );
}

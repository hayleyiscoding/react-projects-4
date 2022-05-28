import React from "react";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

export default function App() {
  const [item, setItem] = React.useState("");
  const [list, setList] = React.useState([]);
  const [alertAdded, setAlertAdded] = React.useState(false);
  const [alertDeleted, setAlertDeleted] = React.useState(false);
  const [alertChanged, setAlertChanged] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setList((prevList) => {
      return [item, ...prevList];
    });
    setAlertAdded((prevState) => !prevState);
    setItem("");
  }

  React.useEffect(() => {
    const timeOutAdded = setTimeout(() => {
      setAlertAdded(false);
    }, 3000);
    return () => clearTimeout(timeOutAdded);
  }, [alertAdded]);

  function handleDelete(event) {
    setList((prevItems) => {
      prevItems.filter((item, i) => event.target.key !== item.key);
    });
    setAlertDeleted((prevState) => !prevState);
  }

  React.useEffect(() => {
    const timeOutDeleted = setTimeout(() => {
      setAlertDeleted(false);
    }, 3000);
    return () => clearTimeout(timeOutDeleted);
  }, [alertDeleted]);

  function handleEdit(event) {
    setList((prevList)=> prevlist.filter((item, i) => (event.target.id = item.id);

    setAlertChanged((prevState) => !prevState);
  }

  React.useEffect(() => {
    const timeOutChanged = setTimeout(() => {
      setAlertChanged(false);
    }, 3000);
    return () => clearTimeout(timeOutChanged);
  }, [alertChanged]);

  return (
    <>
      <header>
        {alertAdded && <p>Item added to the list!</p>}
        {alertDeleted && <p>Item deleted from the list!</p>}
        <h1>Grocery Bud</h1>
      </header>
      <main>
        <section>
          <form onSubmit={handleSubmit} className='flex'>
            <input
              name='item'
              id='item'
              placeholder='e.g. eggs'
              type='text'
              value={item}
              onChange={(event) => setItem(event.target.value)}
            />
            <button className='form-button' type='submit'>
              Submit
            </button>
          </form>
        </section>
        <section>
          {list.map((item, index) => (
            <div className='flex'>
              <p key={item}>{item}</p>
              <div className='flex'>
                <AiOutlineEdit onClick={handleEdit} />
                <AiFillDelete onClick={handleDelete} />
              </div>
            </div>
          ))}
          <button onClick={() => setList([])}>Clear Items</button>
        </section>
      </main>
    </>
  );
}

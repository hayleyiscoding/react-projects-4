import React from "react";
import Alert from "./Alert";
import List from "./List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

export default function App() {
  const [item, setItem] = React.useState("");
  const [list, setList] = React.useState(getLocalStorage());
  const [alert, setAlert] = React.useState({ show: false, msg: "", type: "" });
  const [editID, setEditID] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!item) {
      showAlert(true, "danger", "Please enter a value");
    } else if (item && isEditing) {
      setList(
        list.map((singleItem) => {
          if (singleItem.id === editID) {
            return { ...singleItem, title: item };
          } else {
            return singleItem;
          }
        })
      );
      setItem("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "The value has been changed");
    } else {
      showAlert(true, "success", "Item has been added to the list");
      const newItem = {
        title: item,
        id: new Date().getTime().toString(),
      };
      setList([newItem, ...list]);
      setItem("");
    }
  }

  function removeItem(id) {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, "danger", "The item has been removed");
  }

  function editItem(id) {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setItem(specificItem.title);
  }

  function showAlert(show = false, type = "", msg = "") {
    setAlert({ show, type, msg });
  }

  React.useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <header>
        {alert.show && <Alert {...alert} list={list} removeAlert={showAlert} />}
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
              {isEditing ? "edit" : "submit"}
            </button>
          </form>
        </section>
        <section>
          {list.length > 0 && (
            <div>
              <List items={list} removeItem={removeItem} editItem={editItem} />
              <button onClick={() => setList([])}>Clear Items</button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

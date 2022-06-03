import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

export default function List({ items, removeItem, editItem }) {
  return (
    <div>
      {items.map((item) => {
        const { title, id } = item;
        return (
          <article key={id} className='flex'>
            <p>{title}</p>
            <div className='flex'>
              <button type='button' onClick={() => editItem(id)}>
                <AiOutlineEdit />
              </button>
              <button type='button' onClick={() => removeItem(id)}>
                <AiFillDelete />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}


import React, { useState } from 'react';
import Item from './Item';
import "./Column.css";
const Column = ({ column, onDeleteItem  }) => {
  const [items, setItems] = useState(column.items);

  const handleItemCreate = (name, description, dueDate) => {
    const newItem = { id: Date.now(), name, description, dueDate };
    setItems([...items, newItem]);
  };

  return (
    <div className="kanban-column">
      <h3>{column.title}</h3>
      <div className="kanban-items">
        {items.map((item) => (
          <Item key={item.id} item={item}  onDelete={onDeleteItem}/>
        ))}
        <button onClick={() => handleItemCreate('New Item', '', null)}>Add Item</button>
      </div>
    </div>
  );
};

export default Column;

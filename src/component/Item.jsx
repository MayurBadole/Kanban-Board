import React, { useState } from 'react';
import "./Item.css";

const Item = ({ item }) => {
  const [isEditing, setEditing] = useState(false);
  const [itemName, setItemName] = useState(item.name);
  const [itemDescription, setItemDescription] = useState(item.description);
  const [dueDate, setDueDate] = useState(item.dueDate);

  const handleSave = () => {
    // Implement item update logic
    setEditing(false);
  };

  const handleDelete = () => {
    // Implement item deletion logic
  };

  return (
    <div className="kanban-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <textarea
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <div>{item.name}</div>
          <div>{item.description}</div>
          {item.dueDate && <div>Due Date: {item.dueDate}</div>}
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Item;

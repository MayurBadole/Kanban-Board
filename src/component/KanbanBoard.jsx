import React, { useState } from 'react';
import Column from './Column';
import "./KanbanBoard.css";

const KanbanBoard = ({ board }) => {
  const [columns, setColumns] = useState([
    { id: 1, title: 'To Do', items: [] },
    { id: 2, title: 'In Progress', items: [] },
    { id: 3, title: 'Completed', items: [] },
  ]);

  const handleColumnCreate = (title) => {
    const newColumn = { id: Date.now(), title, items: [] };
    setColumns([...columns, newColumn]);
  };

  return (
    <div className="kanban-board">
      <h2>{board.name}</h2>
      <p>{board.description}</p>
      <div className="kanban-columns">
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
        <button onClick={() => handleColumnCreate('New Column')}>Add Column</button>
      </div>
    </div>
  );
};

export default KanbanBoard;

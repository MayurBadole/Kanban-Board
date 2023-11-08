import React, { useState } from 'react';
import KanbanBoard from './KanbanBoard.jsx';

const BoardList = () => {
  const [boards ] = useState([
    { id: 1, name: 'Project A', description: 'This is Project A' },
    { id: 2, name: 'Project B', description: 'This is Project B' },
    // Add more boards here
  ]);

  return (
    <div className="board-list">
      {boards.map((board) => (
        <KanbanBoard key={board.id} board={board} />
      ))}
    </div>
  );
};

export default BoardList;

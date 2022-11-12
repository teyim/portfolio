import { useEffect, useState } from 'react';
import Cell, { cellSize } from './cell';

function Grid() {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  // determine rows and columns
  useEffect(() => {
    const calculateGrid = () => {
      const columnCount = Math.ceil(window.innerWidth / cellSize);
      setColumns(columnCount);
      const rowCount = Math.ceil(window.innerHeight / cellSize);
      setRows(rowCount);
    };
    // calculate the grid on load
    calculateGrid();
    // recalculate grid on resize
    window.addEventListener('resize', calculateGrid);
    // cleanup
    return () => {
      window.removeEventListener('resize', calculateGrid);
    };
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen grid overflow-hidden -z-10 "
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {Array.from({ length: columns * rows }).map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  );
}

export default Grid;

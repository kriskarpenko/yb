const Cell = ({ title, size = 2 }) => {
  return <div style={{ height: size, width: size }} title={title}></div>;
};

export default Cell;

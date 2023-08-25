const Box = ({ id, color, width, height, removeBox }) => {
  const handleClick = () => {
    removeBox(id);
  };
  return (
    <div
      style={{
        backgroundColor: color,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <button onClick={handleClick} className="remove-box-btn">
        X
      </button>
    </div>
  );
};
export default Box;

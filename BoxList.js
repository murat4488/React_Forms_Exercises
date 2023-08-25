import Box from "./Box";

const BoxList = ({ boxes, removeBox }) => {
  return (
    <div>
      {boxes.map((box) => (
        <Box
          id={box.id}
          color={box.color}
          width={box.width}
          height={box.height}
          removeBox={removeBox}
        />
      ))}
    </div>
  );
};
export default BoxList;

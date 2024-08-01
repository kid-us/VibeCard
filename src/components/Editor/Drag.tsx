import Draggable from "react-draggable";
const Drag = () => {
  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[25, 25]} // Snaps to grid of 25px
      scale={1} // Scale of the element
      onStart={(e, data) => console.log("Start:", e, data)}
      onDrag={(e, data) => console.log("Drag:", e, data)}
      onStop={(e, data) => console.log("Stop:", e, data)}
    >
      <div
        style={{
          width: 200,
          height: 100,
          background: "lightblue",
          textAlign: "center",
        }}
      >
        <div
          className="handle"
          style={{ background: "gray", padding: "5px", cursor: "move" }}
        >
          Drag me from here
        </div>
        Drag me around
      </div>
    </Draggable>
  );
};

export default Drag;

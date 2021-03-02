import { SketchField, Tools } from "react-sketch-whiteboard";

export default function Body({ color, lineWidth }) {
  console.log(lineWidth);
  return (
    <div>
      <SketchField
        width="100vw"
        height="90vh"
        margin-top="4rem"
        tool={Tools.Pencil}
        lineColor={`${color.hex}`}
        lineWidth={lineWidth}
        undoSteps={15}
      />
    </div>
  );
}

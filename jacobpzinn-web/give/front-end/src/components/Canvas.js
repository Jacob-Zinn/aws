import useCanvas from "../hooks/useCanvas";

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
const Canvas = (props) => {
  const { draw, isAnimated, ...rest } = props;
  const canvasRef = useCanvas(draw, isAnimated);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;

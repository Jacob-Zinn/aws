import useCanvas from "../hooks/useCanvas";

const Canvas = (props) => {
  const { draw, isAnimated, ...rest } = props;
  const canvasRef = useCanvas(draw, isAnimated);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;

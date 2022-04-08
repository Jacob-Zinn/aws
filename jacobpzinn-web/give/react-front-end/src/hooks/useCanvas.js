import { useRef, useEffect } from "react";


function resizeCanvas(canvas) {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext("2d");
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }

  return false;
}

const useCanvas = (draw, isAnimated) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      // PRE DRAW
      context.save();
      resizeCanvas(canvas);
      const { width, height } = context.canvas;
      context.clearRect(0, 0, width, height);

      // DRAWING
      if (isAnimated) {
        frameCount++;
        draw(context, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      } else {
        draw(context);
      }

      // POST DRAW
      context.restore();
    };
    render();
    
    if (isAnimated) {
      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }
  }, [draw]);

  return canvasRef;
};

export default useCanvas;

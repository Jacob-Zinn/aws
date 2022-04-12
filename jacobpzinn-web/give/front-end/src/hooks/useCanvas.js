import { useRef, useEffect } from "react";


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
      const { originalWidth, originalHeight } = context.canvas;
      let dimensions = getObjectFitSize(
        true,
        canvas.clientWidth,
        canvas.clientHeight,
        canvas.width,
        canvas.height
      );
      const dpr = window.devicePixelRatio || 1;
      canvas.width = dimensions.width * dpr;
      canvas.height = dimensions.height * dpr;

      let ratio = Math.min(
        canvas.clientWidth / originalWidth,
        canvas.clientHeight / originalHeight
      );
      context.scale(ratio * dpr, ratio * dpr); //adjust this!


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


// adapted from: https://www.npmjs.com/package/intrinsic-scale
function getObjectFitSize(
  contains /* true = contain, false = cover */,
  containerWidth,
  containerHeight,
  width,
  height
) {
  var doRatio = width / height;
  var cRatio = containerWidth / containerHeight;
  var targetWidth = 0;
  var targetHeight = 0;
  var test = contains ? doRatio > cRatio : doRatio < cRatio;

  if (test) {
    targetWidth = containerWidth;
    targetHeight = targetWidth / doRatio;
  } else {
    targetHeight = containerHeight;
    targetWidth = targetHeight * doRatio;
  }

  return {
    width: targetWidth,
    height: targetHeight,
    x: (containerWidth - targetWidth) / 2,
    y: (containerHeight - targetHeight) / 2,
  };
}

export default useCanvas;

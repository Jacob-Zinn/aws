import { StyledMessagePreview } from "./styles/MessagePreview.styled";
import giveLogo from "../assets/give-sm.png";
import anime from "animejs";
import Canvas from "./Canvas";

const MessagePreview = ({ message, to, from }) => {
  const drawAnim = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();

    ctx.arc(50, 100, 20 , 0, 2 * Math.PI);
    ctx.fill();
  };


  const drawCrap = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    
    ctx.strokeStyle = "#f2a488";
    ctx.moveTo(0, ctx.canvas.height);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height)
    ctx.stroke();
  };

  return (
    <StyledMessagePreview>
      <div className="intro">
        <div className="flex-column center">
          <p>{to}</p>
        </div>

        <div className="flex-column center">
          <a href="give.jacobpzinn.com">
            <img className="whiteout" src={giveLogo} />
          </a>
        </div>
      </div>

      <div className="containing">
        <div className="message">{message}</div>
      </div>

      <div className="outro">{from}</div>

      <Canvas draw={drawCrap} isAnimated={false} id="canvas" />

      <div className="bottom-trim">
        <p>&nbsp;</p>
      </div>
    </StyledMessagePreview>
  );
};

export default MessagePreview;

import { StyledMessagePreview } from "./styles/MessagePreview.styled";
import giveLogo from "../assets/give-sm.png";
import Canvas from "./Canvas";

const MessagePreview = ({ messageInput }) => {
  const drawAnim = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, ctx.canvas.height / 2, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  const draw = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();

    ctx.strokeStyle = "#f2a488";
    let width = ctx.canvas.width
    let height = ctx.canvas.height
    let interval = width/80;
    ctx.lineJoin = "bevel"
    ctx.moveTo(0, ctx.canvas.height/2);
    ctx.lineTo(width/4 + interval, height/2);
    ctx.lineTo(width/4 + interval*2, 0);
    ctx.lineTo(width/4 + interval*3, height - height/10);
    ctx.lineTo(width/4 + interval*3.5, height/2 - height/5);
    ctx.lineTo(width/4 + interval*4, height/2);
    ctx.lineTo(width, height/2);
    ctx.stroke();
  };

  return (
    <StyledMessagePreview>
      <div className="intro">
        <div className="flex-column center">
          <p>{messageInput.to}</p>
        </div>

        <div className="flex-column center">
          <a href="give.jacobpzinn.com">
            <img className="whiteout" src={giveLogo} />
          </a>
        </div>
      </div>

      <div style={{border: "none"}} className="message">
        <p>{messageInput.message}</p>
      </div>

      {/* <Canvas draw={draw} height="30" width="100%" isAnimated={false} id="canvas" /> */}

      <div className="outro">
       <p>
          sincerely,
          <br /> 
          <strong>
          {messageInput.from}
          </strong>
        </p>
      </div>

      <div className="bottom-trim">
        <p>&nbsp;</p>
      </div>
    </StyledMessagePreview>
  );
};

export default MessagePreview;

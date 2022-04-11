import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import giftSvg from "../assets/gift.svg";
import { StyledGift } from "../components/styles/Gift.styled";

const Gift = () => {
  const { id } = useParams();
  const [enableTimer, setEnableTimer] = useState(true);
  const [showGift, setShowGift] = useState(false);
  const [shake, setShake] = useState(true)

  const shakeImg = useRef()

    useEffect(
      function appRunTimer() {
        // Creates a new timer when mount the component...
        if (enableTimer) {
          const timer = setInterval(() => {
          }, 2000);

          // Stops the old timer when umount the component.
          return function stopTimer() {
            clearInterval(timer);
          };
        }
      },
      [enableTimer]
    );

  function shakeAnim() {
    console.log("shaking anim");
    setShake(true)
  }

  function openGift() {}

  return (
    <StyledGift className="fthis">
      <img
    //   ref={shakeImg}
    //   className={"regular" + (shake && 'shake-anim') }
        onClick={() => {
          openGift();
        }}
        src={giftSvg}
        style={{ objectFit: "cover", width: "15vw" }}
      />
    </StyledGift>
    //   <Testing />

    // {transitions(({ opacity }, item) => (
    //     <animated.div
    //       style={{
    //         opacity: opacity.to(item.op),
    //         transform: opacity
    //           .to(item.trans)
    //           .to(y => `translate3d(0,${y}px,0)`),
    //       }}>
    //       {item.fig}
    //     </animated.div>
    //   ))}

    //     <Transition
    //     items={showGift}
    //     from={{ opacity: 1,  transform: 'translateX(-30%)' }}
    //     enter={{ opacity: 1,  transform: 'translateX(0)' }}
    //     leave={{ opacity: 1,  transform: 'translateX(80vw)' }}
    //     delay={40}
    //     config={config.default}
    //     onRest={() =>
    //         {
    //             setShowGift(!showGift)
    //         }

    //     }>

    //     {(styles, item) =>
    //       item && <animated.div style={styles}>✌️</animated.div>

    //     // <animated.StyledGift
    //     // style={styles}
    //     // >
    //     //   <h1>{id}</h1>
    //     //   <img
    //     //     onClick={() => {
    //     //       openGift();
    //     //     }}
    //     //     src={giftSvg}
    //     //     style={{ objectFit: "cover", width: "15vw" }}
    //     //   />
    //     // </animated.StyledGift>
    // }
    //   </Transition>
  );
};

export default Gift;

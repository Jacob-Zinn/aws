import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import giftSvg from "../assets/gift.svg";
import { StyledGift } from "../components/styles/Gift.styled";
import axios from "axios";
import MessagePreview from "../components/MessagePreview";

const Gift = () => {
  const { id } = useParams();
  const [enableTimer, setEnableTimer] = useState(true);
  const [showGift, setShowGift] = useState(true);
  const [message, setMessage] = useState();

  useEffect(
    function appRunTimer() {
      // Creates a new timer when mount the component...
      if (enableTimer) {
        const timer = setInterval(() => {}, 2000);

        // Stops the old timer when umount the component.
        return function stopTimer() {
          clearInterval(timer);
        };
      }
    },
    [enableTimer]
  );

  useEffect(function initMessage() {
    async function getMessage() {
      try {
        let response = await axios.get(`/api/messages/${id}`);
        setMessage(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getMessage();
  }, []);

  function openGift() {
    setShowGift(false);
  }

  return (
    <>
      {showGift && (
        <StyledGift>
          <div className="flex flex-justify-center">
            <img
              onClick={() => {
                openGift();
              }}
              src={giftSvg}
              style={{ objectFit: "cover", width: "15vw" }}
            />
          </div>
        </StyledGift>
      )}

      {!showGift && (
        <div className="flex flex-justify-center">
          <MessagePreview
            newWidth={"min(75vw, 30rem )"}
            messageInput={message}
          />
        </div>
      )}
    </>
  );
};

export default Gift;

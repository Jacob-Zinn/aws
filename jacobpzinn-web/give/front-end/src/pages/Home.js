import { useState, useEffect } from "react";
import TextBar from "../components/TextBar";
import { GiveSugg } from "../components/styles/GiveSugg.styled";
import Utils from "../utils/Quote.ts";
import MessagePreview from "../components/MessagePreview";
import { FaShareAlt, FaClipboard } from "react-icons/fa";
import { StyledButton } from "../components/styles/Button.styled";
import axios from "axios";
import giftSvg from "../assets/gift.svg";

const Home = ({authUser}) => {
  const [sugg, setSugg] = useState("more...");
  // const [sugg2, setSugg2] = useState("");
  const [showSugg, setShowSugg] = useState(false);
  const [suggText, setSuggText] = useState("");
  const [wordArray, setWordArray] = useState();
  const [userInput, setUserInput] = useState({});
  const [enablePreview, setEnablePreview] = useState(false);
  const [invokePreview, setInvokePreview] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [copySuccess, setCopySuccess] = useState(false)

  useEffect(function initAnim() {
    startWordTranslationAnimation();
  }, []);

  useEffect(
    function appRunTimer() {
      // Creates a new timer when mount the component..
      const timer = setInterval(() => {
        changeSuggestion();
      }, 4000);

      // Stops the old timer when umount the component.
      return function stopTimer() {
        clearInterval(timer);
      };
    },
    [wordArray]
  );

  // useEffect(
  //   function updateShowSuggestion() {
  //     setShowSugg(!showSugg);
  //   },
  //   [sugg1, sugg2]
  // );

  useEffect(
    function initAnim() {
      const size = Object.keys(userInput)?.length;
      if (size === 3) {
        setEnablePreview(true);
      } else {
        setEnablePreview(false);
      }
    },
    [userInput]
  );

  // const shareLinkTransition = useTransition(enablePreview, invokePreview, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   delay: 200,
  //   config: config.gentle,
  //   // onRest: () => setItems([]),
  // });

  const startWordTranslationAnimation = async function () {
    try {
      const tmp = await getSuggestions();
      setWordArray(tmp);
    } catch (error) {
      console.log(error);
    }
  };

  const getSuggestions = async function () {
    const url = `/kindWords.txt`;
    return await fetch(url)
      .then((response) => {
        return response.text();
      })
      .then((json) => {
        return JSON.parse(json).map((obj) => obj.word); // array
      });
  };

  const changeSuggestion = function () {
    if (!wordArray) {
      startWordTranslationAnimation();
      return;
    }
    let rand = Utils.getRandomInt(wordArray.length);
    setSugg(wordArray[rand] ?? "more");
    // if (showSugg) {
    //   setSugg2(wordArray[rand] ?? "more");

    // } else {
    //   setSugg(wordArray[rand] ?? "more");
    // }
  };

  const insertQuote = function (matchWord) {
    return function () {
      console.log(`insert quote with word: ${matchWord}`);
      Utils.getQuote(matchWord).then((newQuote) => {
        setSuggText(newQuote);
      });
    };
  };

  async function uploadMessage() {
    try {
      let response = await axios.post("/api/messages/", {
        ...userInput,
        originUser: authUser._id,
      });
      setInvokePreview(false);
      setCopySuccess(false)
      setShareLink(`https://give.jacobpzinn.com/gift/${response.data.message._id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function addInput(type, input) {
    let newObj = { ...userInput };
    newObj[type] = input;
    setUserInput(newObj);
  }

  function copyToClipboard(e) {
    navigator.clipboard.writeText(shareLink);
    setCopySuccess(true)
  }

  return (
    <main className="flex">
      <div className="content flex">

        <div className="flex title">
          <h1>give</h1>
          <div id="give-suggestion-container">
            <GiveSugg
              // className={showSugg ? "fullOpac" : "noOpac"}
              onClick={insertQuote(sugg)}
            >
              {sugg}
            </GiveSugg>
            {/* <GiveSugg
              isEntry={showSugg}
              className={showSugg ? "noOpac" : "fullOpac"}
              onClick={insertQuote(sugg2)}
            >
              {sugg2}
            </GiveSugg> */}
          </div>
        </div>
        <p className="description">
          A simple site that gives you an excuse to change the world. Type any
          message you'd like, and we'll help you share it with those that you care about.
        </p>

        <div>
          <div className="input-title">
            <p>message</p>
          </div>
          <TextBar
            insertText={suggText}
            hintTextProp="i.e. I like the way you laugh"
            returnType="message"
            returnInput={addInput}
          />
        </div>
        <div>
          <div className="input-title">
            <p>to:</p>
          </div>
          <TextBar
            hintTextProp="i.e. Tagg the man"
            returnType="to"
            returnInput={addInput}
          />
        </div>
        <div>
          <div className="input-title">
            <p>from:</p>
          </div>
          <TextBar
            hintTextProp="i.e. Jacob"
            returnType="from"
            returnInput={addInput}
          />
        </div>

        <div>
          <StyledButton
            onClick={() => {
              setShareLink(false);
              setInvokePreview(true);
            }}
          >
            <p>preview message</p>
          </StyledButton>
        </div>

        {enablePreview && invokePreview && (
          <MessagePreview newWidth={"40%"} messageInput={userInput} />
        )}

        {enablePreview && invokePreview && (
          <div>
            <StyledButton
              onClick={() => {
                uploadMessage();
              }}
            >
              <div className="flex">
                <div
                  className="flex-column"
                  style={{ justifyContent: "center" }}
                >
                  <FaShareAlt
                    style={{ color: "var(--primary)", cursor: "pointer" }}
                  />
                </div>
                <p>share</p>
              </div>
            </StyledButton>
          </div>
        )}

        {shareLink && (
          <>
            <div className="flex" style={{ gap: "0" }}>
              <a href={shareLink}>
                <img
                  src={giftSvg}
                  style={{ objectFit: "cover", width: "5rem" }}
                />
              </a>

              <div className="flex-column" style={{ justifyContent: "end" }}>
                <div className="flex">
                  <div
                    className="flex-column"
                    style={{ justifyContent: "end" }}
                  >
                    <p
                      style={{
                        marginBottom: ".7rem",
                        textDecoration: "underline",
                        backgroundColor: "lightgray",
                        borderRadius: ".3rem",
                        padding: ".3rem",
                      }}
                    >
                      {" "}
                      {shareLink}
                    </p>
                  </div>
                  <div
                    className={`share-link ${copySuccess && 'clipboard-copy-success'}`}
                    onClick={copyToClipboard}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="clipboard-container flex">
                      <div
                        className="flex-column"
                        style={{ justifyContent: "center", padding: ".3rem" }}
                      >
                        <FaClipboard style={{ color: "var(--primary-dark" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <p style={{marginLeft: "1.2rem", marginTop: "-1rem"}}>^^Share your message with this link^^</p> */}
          </>
        )}
      </div>
    </main>
  );
};

export default Home;

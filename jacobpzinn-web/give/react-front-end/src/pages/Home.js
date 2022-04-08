import { useState, useEffect } from "react";
import TextBar from "../components/TextBar";
import Button from "../components/Button";
import { GiveSugg } from "../components/styles/GiveSugg.styled";
import Utils from "../utils/Quote.ts";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import MessagePreview from "../components/MessagePreview";

const Home = () => {
  const [sugg1, setSugg1] = useState("more...");
  const [sugg2, setSugg2] = useState("");
  const [showSugg, setShowSugg] = useState(true);
  const [suggText, setSuggText] = useState("");
  const [wordArray, setWordArray] = useState();
  const [userInput, setUserInput] = useState({});
  const [enablePreview, setEnablePreview] = useState(false);
  const [invokePreview, setInvokePreview] = useState(false);

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

  const startWordTranslationAnimation = async function () {
    try {
      const tmp = await getSuggestions();
      setWordArray(tmp);
    } catch (error) {
      console.log(error);
    }
  };

  const changeSuggestion = function () {
    if (!wordArray) {
      startWordTranslationAnimation();
      return;
    }
    let rand = Utils.getRandomInt(wordArray.length);
    if (showSugg) {
      setSugg2(wordArray[rand] ?? "more");
    } else {
      setSugg1(wordArray[rand] ?? "more");
    }

    setShowSugg(!showSugg);
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

  const insertQuote = function (matchWord) {
    return function () {
      console.log(`insert quote with word: ${matchWord}`);
      Utils.getQuote(matchWord).then((newQuote) => {
        setSuggText(newQuote);
      });
    };
  };

  function addInput(type, input) {
    let newObj = { ...userInput };
    newObj[type] = input;
    setUserInput(newObj);
  }

  function testInput() {
    console.log('testing')
    setEnablePreview(true);
    setUserInput({
      to: "Jacob Zinn",
      from: "Your favorite person",
      message:
        "I was just thinking about you today. You're the best. Have fun blowing out the candle!",
    });
    setInvokePreview(true);
  }

  return (
    <main className="flex">
      <div className="content flex">
      <Button
            cta="TEST DELETE"
            clickFun={()=> {
              return testInput()
            }}
          >
            <h1>DELETE</h1>
          </Button>
        <div className="flex title">
          <h1
            onClick={() => {
              setShowSugg(!showSugg);
            }}
          >
            give
          </h1>
          <div id="give-suggestion-container">
            {showSugg && (
              <GiveSugg isEntry={showSugg} onClick={insertQuote(sugg1)}>
                {sugg1}
              </GiveSugg>
            )}
            {showSugg === false && (
              <GiveSugg isEntry={!showSugg} onClick={insertQuote(sugg2)}>
                {sugg2}
              </GiveSugg>
            )}
          </div>
        </div>
        <p className="description">
          A simple site that gives you an excuse to change the world. Type any
          message you'd like, and we'll help you share it with anyone you'd
          like.
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

        {!enablePreview && invokePreview && <div>"Testing"</div>}

        <div>
          <Button
            id="previewBtn"
            cta="preview message"
            clickFun={() => {
              setInvokePreview(true);
            }}
          >
            <p>preview message</p>
          </Button>
        </div>

        {enablePreview && invokePreview && (
          <MessagePreview
            message={userInput["message"]}
            to={userInput["to"]}
            from={userInput["from"]}
          />
        )}
      </div>
    </main>
  );
};

export default Home;

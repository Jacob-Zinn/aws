import { useState, useEffect } from "react";
import TextBar from "../components/TextBar";
import Button from "../components/Button";
import { GiveSugg } from "../components/styles/GiveSugg.styled";
import Utils from "../utils/Quote.ts";

const Home = () => {
  const [sugg1, setSugg1] = useState("more...");
  const [sugg2, setSugg2] = useState("");
  const [showSugg, setShowSugg] = useState(true);
  const [suggText, setSuggText] = useState("");
  const [wordArray, setWordArray] = useState([]);

  let timer = null;

  useEffect(() => {
    if (timer === null) {
      startWordTranslationAnimation();
    }
    return () => {
      clearInterval(timer);
    };
  }, []);

  const startWordTranslationAnimation = async function () {
    try {
      const wordArray = await getNewSuggestion();
      timer = setInterval(() => {
        console.log("INTERVAL");
        changeGiveSuggestion(wordArray);
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  const changeGiveSuggestion = function () {
    if (showSugg) {
      setSugg2(
        wordArray[Utils.getRandomInt(Object.keys(wordArray).length)].word ?? 'more'
      );
    } else {
      setSugg1(
        wordArray[Utils.getRandomInt(Object.keys(wordArray).length)].word
      );
    }
    setTimeout(changeGiveSuggestion, 4000)
    setShowSugg(!showSugg);
  };

  const getNewSuggestion = async function () {
    const url = `/kindWords.txt`;
    return await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json; // array
      });
  };

  const insertQuote = function (matchWord) {
    return function () {
      console.log(`insert quote with word: ${matchWord}`);
    };
    // utils.getQuote(matchWord).then((newQuote) => {suggText.value = newQuote});
  };

  const previewMessageFun = function () {
    console.log("previewing message");
  };

  return (
    <main className="flex">
      <div className="content flex">
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
          />
        </div>
        <div>
          <div className="input-title">
            <p>to:</p>
          </div>
          <TextBar hintTextProp="i.e. Tagg the man" />
        </div>
        <div>
          <div className="input-title">
            <p>from:</p>
          </div>
          <TextBar hintTextProp="i.e. Jacob" />
        </div>

        <div>
          <Button id="previewBtn" clickFun={previewMessageFun}>
            <p>preview message</p>
          </Button>
        </div>

        <div id="messagePreview"></div>
      </div>
    </main>
  );
};

export default Home;

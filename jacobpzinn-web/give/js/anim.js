startWordTranslationAnimation();

async function startWordTranslationAnimation() {
  try {
    const wordArray = await getNewSuggestion();
    console.log(`wordArray incoming`);
    console.log(typeof wordArray);
    setInterval(() => {changeGiveSuggestion(wordArray)}, 4500);
  } catch (error) {
    console.log(error);
  }
}


function changeGiveSuggestion(wordArray) {
  const giveContainer = document.getElementById(`give-suggestion-container`);
  const element = document.getElementById(`give-suggestion`);

  if (giveContainer.childElementCount >= 2) {
    console.log(`refraining from adding another quote`);
    return;
  }

  let y = 0;
  let alpha = 1;
  const yMax = 2; // em


  let newElement = document.createElement(`h1`);
  newElement.classList = `give-suggestion`;
  newElement.textContent = wordArray[getRandomInt(Object.keys(wordArray).length)].word;
  newElement.style.top = yMax;
  newElement.setAttribute(`id`, `give-suggestion`);
  newElement.addEventListener(`click`, alphaAnim);
  giveContainer.appendChild(newElement);

  let suggestionInterval = setInterval(() => {
    if (y >= yMax) {
      newElement.style.opacity = 1;
      newElement.style.top = 0;
      clearInterval(suggestionInterval);

      // making replacing old element
      giveContainer.removeChild(element);
    } else {
      alpha -= 0.05;
      y += 0.1;
      element.style.opacity = alpha;
      element.style.top = `${y}em`;

      newElement.style.opacity = 1 - alpha;
      newElement.style.top = y - yMax;
    }
  }, 25);
}


async function getNewSuggestion() {

  let rand = getRandomInt(10);
  console.log(rand);

  const url = `misc/kindWords.txt`;
  return await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json; // array
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Alpha anim
document
  .getElementById(`give-suggestion`)
  

  function alphaAnim() {
    let element = document.getElementById(`give-suggestion`);

    getQuote(element);

    let fadingOut = true;
    element.style.opacity = 0.95;

    let anim = setInterval(() => {
      let curAlpha = element.style.opacity;

      if (curAlpha <= 0) {
        fadingOut = false;
        element.style.opacity = 0;
        element.style.opacity = curAlpha + 0.05;
      } else if (curAlpha >= 1) {
        clearInterval(anim);
      } else if (fadingOut) {
        element.style.opacity = parseFloat(curAlpha) - 0.1;
      } else if (!fadingOut) {
        element.style.opacity = parseFloat(curAlpha) + 0.07;
        console.log(`testing`);
      }
    }, 10);
  }
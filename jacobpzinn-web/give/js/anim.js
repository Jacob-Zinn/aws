
setInterval(changeGiveSuggestion(), 3000);


function changeGiveSuggestion() {
    let date = new Date();
    console.log(date.toLocaleTimeString());
    const give = document.getElementById(`give-suggestion`);

    let rand = getRandomInt(10);
    console.log(rand);

    const url = `misc/kindWords.txt`
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      console.log(json[0]);
      console.log("Got " + json[0].city);
      return json;
    })
    
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
const giveContainer = document.getElementById(`give-suggestion-container`);

// let fontSize = giveContainer.style.fontSize;
// let largerSize = fontSize * 1.1

// giveContainer.addEventListener(`mouseenter`, (event) => {
//     give.style.fontSize = largerSize;
// });
// giveContainer.addEventListener(`mouseleave`, () => {
//     give.style.fontSize = fontSize;
// });

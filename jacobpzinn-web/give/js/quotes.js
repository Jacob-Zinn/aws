/*
{

    https://github.com/lukePeavey/quotable

  _id: string
  // The quotation text
  content: string
  // The full name of the author
  author: string
  // The `slug` of the quote author
  authorSlug: string
  // The length of quote (number of characters)
  length: number
  // An array of tag names for this quote
  tags: string[]
}

GET /random?tags=technology,famous-quotes
GET /random?tags=history|civil-rights
GET /random?maxLength=50
GET /random?minLength=100&maxLength=140
*/

document.getElementById(`give-suggestion`).addEventListener(`click`, () => {
  getQuote();
});

function getQuote() {
  const api_url = `https://api.quotable.io/random?tags=`;

  const messageElement = document.getElementById(`message`);
  let url = api_url.concat(document.getElementById(`give-suggestion`).innerText.replace(/[^a-z]/gi, ""));
  // .concat(`|friendship`);

  console.log(url);
  modifyMessage(url, messageElement);
}

function modifyMessage(url, element) {
  getapi(url)
    .then((quote) => {
      element.innerText = quote[`content`];
    })
    .catch((error) => {
      modifyMessage(`https://api.quotable.io/random`, element);
      console.log(`Error: ${error.message}`);
    });
}

async function getapi(url) {
  const response = await fetch(url);
  if (response.ok) {
    data = await response.json();
    return data;
  } else {
    throw Error(response.statusText);
  }
}

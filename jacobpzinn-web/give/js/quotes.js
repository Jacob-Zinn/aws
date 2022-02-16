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

let giveQuote = document.getElementById(`give-suggestion`);
giveQuote.addEventListener(`click`, (event) => {
  const message = document.getElementById(`message`);
  console.log(message);
  console.log(typeof message);
  let url = api_url
    .concat(giveQuote.innerText.replace(/[^a-z]/gi, ""))
    .concat(`|friendship`);

  getapi(url)
    .then((quote) => {
      message.innerText = quote[`content`];
    })
    .catch((error) => {
      console.log(`Error: ${error.message}`);
    });
});

const api_url = `https://api.quotable.io/random?tags=`;

async function getapi(url) {
  const response = await fetch(url);
  if (response.ok) {
    data = await response.json();
    return data;
  } else {
    throw Error(response.statusText);
  }
  //   console.log(data[`content`]);
}

// const express = require('express');
// const request = require('request');

// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/jokes/random', (req, res) => {
//   request(
//     { url: 'https://cors-anywhere.herokuapp.com/https://joke-api-strict-cors.appspot.com/jokes/random' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));

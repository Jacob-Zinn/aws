// document.getElementById("cityField").addEventListener("keyup", function(event) {
//   event.preventDefault();
// });

// document.getElementById("cityField").addEventListener("keyup", function(event) {
//   event.preventDefault();
//   document.getElementById("txtHint").innerHTML="Keyup";
// });

document.getElementById("cityField").addEventListener("keyup", function(event) {
  event.preventDefault();
  updateSuggestion(document.getElementById("cityField").value)
  // document.getElementById("txtHint").innerHTML=
  //   document.getElementById("cityField").value;
});

function updateSuggestion(letters) {
  const url = `https://cs260.click/api/city?q=${letters}`;
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
    .then((json) => {
      var everything;
      everything = "<ul>";
      for (let i = 0; i < json.length; i++) {
        everything += "<li> " + json[i].city;
      }

      everything += "</ul>";
      document.getElementById("txtHint").innerHTML = everything;
    })
    .catch((error) => {
      console.log(error);
    });
}

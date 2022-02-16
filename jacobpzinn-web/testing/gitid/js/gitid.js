document.getElementById("gitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    var id = document.getElementById("gitUsername").value;
    console.log("id is",id);
    var fullURL = "https://api.github.com/users/" + id;
    console.log(fullURL);
    fetch(fullURL)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      document.getElementById("gitInfo").innerHTML = 
        "<strong>ID= "+json["id"]+"</strong>";
    });
  });
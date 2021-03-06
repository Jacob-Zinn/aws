const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// // Serve up our application UI
// app.use(express.static(path.join(__dirname, './public')));

// // If no API, or exact file, was found then return the app
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

/* ^ this line ^ tells Express to use the public folder as our static folder from which we can serve static files*/


// app.get("/", (req, res) => {
//     res.sendFile("index.html");
//   });

// configuring cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://give.jacobpzinn.com"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// connect to the database
mongoose.connect(
  "mongodb+srv://jacobzinn:u6gEsfTGTJO9LKlM@cluster260.ntnic.mongodb.net/give",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    name: "session",
    keys: ["secretValue"],
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    },
  })
);

// import the users module and setup its API path
const users = require("./users.js");
app.use("/api/users", users.routes);

// import the tickets module and setup its API path
const messages = require("./messages.js");
app.use("/api/messages", messages.routes);

app.listen(4500, () => console.log("Server listening on port 4500!"));






// IMAGE UPLOADS

// // Configure multer so that it will upload to '../front-end/public/images'
// const multer = require('multer')
// const upload = multer({
//   dest: '../front-end/public/images/',
//   limits: {
//     fileSize: 10000000
//   }
// });

// // Upload a photo. Uses the multer middleware for the upload and then returns
// // the path where the photo is stored in the file system.
// app.post('/api/photos', upload.single('photo'), async (req, res) => {
//   // Just a safety check
//   if (!req.file) {
//     return res.sendStatus(400);
//   }
//   res.send({
//     path: "/images/" + req.file.filename
//   });
// });

// app.get("/api/images/:filename", (req, res) => {
//     res.send({
//       path: "/images/" + req.params.filename,
//     });
//   });

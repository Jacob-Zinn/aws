const express = require("express");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  express.static("public")
); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/

// configuring cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://give.jacobpzinn.com"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const mongoose = require("mongoose");

// connect to the database
mongoose.connect(
  "mongodb+srv://jacobzinn:u6gEsfTGTJO9LKlM@cluster260.ntnic.mongodb.net/give",
  {
    useNewUrlParser: true,
  }
);

// Create a scheme for a user's messages
const messageSchema = new mongoose.Schema({
  message: String,
  to: String,
  from: String,
  isOutbound: {
    type: Boolean,
    default: false,
  },
});

// Create a model for users messages.
const Message = mongoose.model("message", messageSchema);

// Create a scheme for a user's messages
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
});

// Create a model for users messages.
const User = mongoose.model("user", userSchema);

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

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/api/images/:filename", (req, res) => {
  res.send({
    path: "/images/" + req.params.filename,
  });
});

// Create a new message in the db.
app.post("/api/messages", async (req, res) => {
  const message = new Message({
    message: req.body.message,
    to: req.body.to,
    from: req.body.from,
    isOutbound: req.body.isOutbound,
  });
  try {
    await message.save();
    res.send(message);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the messages in the db.
app.get("/api/messages", async (req, res) => {
  try {
    let messages = await Message.find();
    res.send(messages);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/message/:id", async (req, res) => {
  try {
    let message = await Message.findById(req.params.id);
    res.send(message);
  } catch (error) {
    res.sendStatus(500);
  }
});

// Create a new message in the db.
app.post("/api/user", async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
  });
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.sendStatus(500);
  }
});

app.get("/api/user/:username", async (req, res) => {
  try {
    // const userExists = await User.exists({ username: req.params.username });
    User.findOne({ username: req.params.username }, function (err, doc) {
      res.send(doc);
    });

    // User.findOne(
    //   { username: new RegExp("^" + req.params.username + "$", "i") },
    //   function (err, doc) {
    //     // res.sendStatus(200);
    //     res.send(doc);
    //   }
    // );
  } catch (error) {
    res.sendStatus(500);
  }
});

// app.delete('/api/messages/:id', async (req,res) => {
//   try {
//     await Item.deleteOne({_id: req.params.id})
//     res.sendStatus(200)
//   } catch(error) {
//     console.log(error)
//     res.sendStatus(500)
//   }
// });

// app.put('/api/messages/:id', async (req,res) => {
//   try {
//     const message = await Message.findOne({_id: req.params.id})
//     message.title = req.body.title
//     message.description = req.body.description
//     await item.save()
//     res.sendStatus(200)
//   } catch(error) {
//     console.log(error)
//     res.sendStatus(500)
//   }
// })

app.listen(4500, () => console.log("Server listening on port 4500!"));

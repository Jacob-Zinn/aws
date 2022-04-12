const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const users = require("./users.js");

//
// Messages
//

const User = users.model;
const validUser = users.valid;

// This is the schema for a message
const messagesSchema = new mongoose.Schema({
  originUser: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  recipientUser: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  message: String,
  to: String,
  from: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", messagesSchema);

// get messages -- will list messages that a user has submitted
router.get("/", validUser, async (req, res) => {
  let messages = {};
  try {
    messages["sent"] = await Message.find({
      originUser: req.user,
    }).sort({
      created: -1,
    });
    messages["received"] = await Message.find({
      recipientUser: req.user,
    }).sort({
      created: -1,
    });
    return res.send(messages);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// get single message
router.get("/:id", validUser, async (req, res) => {
  try {
    let message = await Message.findById(req.params.id);
    res.send(message);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// create a message
router.post("/", validUser, async (req, res) => {
  const message = new Message({
    originUser: req.user,
    message: req.body.message,
    to: req.body.to,
    from: req.body.from,
  });
  try {
    await message.save();
    return res.send({
      message: message,
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});


// delete a message -- only allowed by sender
router.delete("/:id", validUser, async (req, res) => {
  try {
    await Message.deleteOne({
      _id: req.params.id,
      originUser: req.user,
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// delete all messages -- only edits status and response
router.delete("/", validUser, async (req, res) => {
  // can only do this if an administrator
  if (req.user.role !== "admin") {
    return res.sendStatus(403);
  }
  try {
    await Message.deleteMany({});
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// edit a message -- only edits recipientUser in order to delete it from their account
router.put("/:id", validUser, async (req, res) => {
  try {
    message = await Message.findOne({
      _id: req.params.id,
    });

    // only admin and the recipient user can modify message
    if (req.user.role !== "admin" && req.user.id !== message.recipientUser) {
        return res.sendStatus(403);
    }

    message.recipientUser = undefined;
    await message.save();
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

// // edit a message -- only edits status and response
// router.put("/:id", validUser, async (req, res) => {
//   // can only do this if an administrator
//   if (req.user.role !== "admin") {
//     return res.sendStatus(403);
//   }
//   if (!req.body.status || !req.body.response) {
//     return res.status(400).send({
//       message: "status and response are required",
//     });
//   }
//   try {
//     message = await Message.findOne({
//       _id: req.params.id,
//     });
//     message.status = req.body.status;
//     message.response = req.body.response;
//     await message.save();
//     return res.send({
//       message: message,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(500);
//   }
// });

module.exports = {
  routes: router,
};

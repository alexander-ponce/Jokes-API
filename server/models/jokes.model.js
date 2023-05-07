const mongoose = require('mongoose');

// Create a Schema With Validations for a User
const JokeSchema = new mongoose.Schema({
    setup: { 
      type: String,
      required: [true, "Setup is required"],
      minlength: [6, "Setup must be at least 6 characters long"]
    },
    punchline: { 
      type: String,
      required: [true, "Punchline is required"],
      minlength: [10, "Punchline must be less than 10 characters long"]
    }
  }, 
{ timestamps: true }
);

module.exports = mongoose.model("Joke", JokeSchema);
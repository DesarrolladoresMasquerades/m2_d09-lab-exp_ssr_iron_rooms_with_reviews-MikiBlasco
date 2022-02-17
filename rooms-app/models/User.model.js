const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(

  {
    email: {
      type: String,
      unique: true,
      match:[/^\S+@\S+\.\S+$/, "Please use a valid email address."],
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."]
    },
    fullName: String,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;

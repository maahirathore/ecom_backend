import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  avatar: {
    type: String,
  },
  authProvider: {
    type: String,
    enum: ["local", "google"],
    default: "local",
  },

  password: {
    type: String,

    required: function () {
      return this.authProvider === "local";
    },
  },
  mobile: {
    type: Number,
    required: function () {
      return this.authProvider === "local";
    },
  },

  refreshToken: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "seller", "user"],
    default: "user",
    required: true,
  },
  otp: {
    type: Number,
  },
});

// userSchema.pre("save", function () {
//   if (!this.isModified("password")) return;
//   this.password = bcrypt.hashSync(this.password, 10);
// });

// userSchema.methods.comparePassword = function (password) {
//   if (!this.password) return false;
//   return bcrypt.compareSync(password, this.password);
// };

export default mongoose.model("userModel", userSchema);

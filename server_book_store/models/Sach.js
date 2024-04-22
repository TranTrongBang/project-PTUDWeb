const mongoose = require("mongoose");

const SachSchema = new mongoose.Schema({
  masach: {
    type: String,
    require: true,
    unquire: true,
  },
  tensach: {
    type: String,
    require: true,
  },
  dongia: {
    type: Number,
    require: true,
  },
  soquyen: {
    type: Number,
    require: true,
  },
  namxuatban: {
    type: String,
    require: true,
  },
  manxb: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "nhaxuatban",
  },
  tacgia: {
    type: String,
    require: true,
  },
});

module.exports = Sach = mongoose.model("sach", SachSchema);

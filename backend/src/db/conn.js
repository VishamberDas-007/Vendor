const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/vendor";
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
const Schema = mongoose.Schema;
// console.log({ db });
db.once("open", (_) => {
	console.log("Database connected:", url);
});

db.on("error", (err) => {
	console.error("connection error:", err);
});

module.exports = { mongoose };

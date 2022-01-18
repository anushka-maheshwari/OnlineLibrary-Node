const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const connectDB = require("./DB/connect");
const start = async () => {
  try {
    const DB=process.env.DATABASE.replace("<PASSWORD>",
    process.env.DATABASE_PASSWORD
    )
    connectDB(DB);
    app.listen(2000, console.log("Server is listening on port 2000"));
  } catch (error) {
    console.log(error);
  }
};
start();

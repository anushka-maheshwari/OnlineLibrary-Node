const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRouter = require("./routes/userRoute");
const viewRouter = require("./routes/viewRoutes");
const bookRoute = require("./routes/bookRoute");
const app = express();
app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/v1/users/", userRouter);
app.use("/", viewRouter);
app.use("/api/v1/books/", bookRoute);
module.exports = app;

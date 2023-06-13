require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { logger, logEvents } = require("./middleware/logger.js");
const errorHandler = require("./middleware/errorHandler.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions.js");
const connectDB = require("./config/dbConn.js");
const usersRoutes = require("./routes/usersRoutes");
const PORT = process.env.PORT || 3500;

console.log(process.env.NODE_ENV);

const db = connectDB.connect();
db.sequelize.sync();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());

app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root.js"));

app.use("/users", usersRoutes);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.send({ error: "Not found" });
  } else {
    res.type("txt").send("Not found");
  }
});

app.use(errorHandler(logEvents));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

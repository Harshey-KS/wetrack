require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const teacherRoutes=require("./routes/teacherRoutes")
const leaveRecordRoutes=require("./routes/leaveRecordRoutes")

const app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());
app.use(cors());

app.use('/api/teachers', teacherRoutes);
app.use('/api/leave-records', leaveRecordRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
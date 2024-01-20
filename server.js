const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// 1 test route
app.use('/api/v1/test',require('./routes/testRoutes'));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/admin/0", require("./routes/adminRoutes"));
app.use("/api/v1/hospital", require("./routes/hospitalRoutes"));
app.use("/api/v1/service", require("./routes/serviceRoutes"));
app.use("/api/v1/hospitalfacility", require("./routes/hospitalServiceRoutes"));

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
    console.log(
      `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
        .bgBlue.white
    );
  });
import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/provider.js";
import session from "express-session";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRoute from './routes/user.js'
import orderRoute from './routes/Order.js'
import passport from "passport";

const app = express();
export default app;

dotenv.config({
  path: "./config/config.env"
});

//Middlewares
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({
  extended: true
}));

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());


connectPassport();


app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);

//Error Middleware 
app.use(errorMiddleware)
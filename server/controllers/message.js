import { asyncError } from "../middlewares/errorMiddleware.js";
import {Message} from "../models/Message.js" 

export const createMessage = asyncError(
      async(req, res, next)=>{
      const{name, email,message} = req.body;
      const user = "req.user._id";
      console.log(name, email, message);
      const messageOptions = {name, email,message, user};
      await Message.create(messageOptions);
      res.status(201).json({
        success : true,
        message: "Message Sent Successfully"
      })
    }
)

export const getMessages = asyncError(async(req, res, next)=>{
   const messages = await Message.find({})
   messages.sort((a, b) => b.createdAt - a.createdAt);
   res.status(200).json({
    success: true,
    messages
   })
});
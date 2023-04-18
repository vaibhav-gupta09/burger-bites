import express from 'express';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';
import { createMessage, getMessages } from '../controllers/message.js';
const router = express.Router();

router.post("/createmessage",isAuthenticated, createMessage);
router.get("/getemessage",isAuthenticated,authorizeAdmin, getMessages);
export default router;
import express from 'express';
import cors from 'cors'
import UserController from "./users/users-controller.js";
const app = express();
app.use(cors())
app.use(express.json());
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

UserController(app);
app.listen(process.env.PORT || 4000);
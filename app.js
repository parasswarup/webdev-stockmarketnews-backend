import express, {json} from 'express';
import cors from 'cors'
import WebSocketServer from 'websocket';
import http  from 'http';
import UserController from "./users/users-controller.js";
import NewsController from "./controller/news-controller.js";
import axios from "axios";
const app = express();
const webSocketServerPort = 8000
const server = http.createServer()
server.listen(webSocketServerPort)



console.log("Listining to web socket server port 8000")

const wsServer = new WebSocketServer.server({httpServer: server});

const clients = new Map();

wsServer.on('request', function (request) {
    var userID = 200;
    const connection = request.accept(null,request.origin);
    clients[userID] = connection;
    connection.on('message' , function(message) {
        if (message.type === 'utf8') {
            console.log('received message', message.utf8Data);
        }

        //broad cast to all connected clients
        for(let key in clients) {
            clients[key].sendUTF(message.utf8Data)
            console.log('sent message to',clients[key])
        }
    })
});

var i = 0;
//const findAllNews = async () =>
   // await axios.get('https://api.marketaux.com/v1/news/all?countries=in&filter_entities=true&limit=10&published_after=2023-03-09T10:57&api_token=sJVgcuDKE3EkgGFNvj7C8fntGv00ZfrV7C6C21NZ').then(response => response.data)

async function find() {
   // const data = await findAllNews()
    const data = [{"description"
            :
            "Zomato NZ Media Private Limited is Zomato’s New Zealand-based wholly-owned subsidiary, whereas Zomato Australia Pty Limited is based out of Australia and is a step-down subsidiary, , zomato",
        "image"
            :
            "https://static.businessworld.in/article/article_extra_large_image/1643610664_fx7jMh_zomato.png",
        "title"
            :
            i+"Zomato Announces Dissolution Of Subsidiaries In NZ, Australia",
        "uuid"
            :
            i+"771e55f3-e624-465a-a6a8-f4ee7599e327"}
    ]

    i = i+1
   const refinedData = data.map(obj => { const k = {uuid:obj.uuid,title:obj.title,description:obj.description,image:obj.image}

       return k

   })
    wsServer.connections.forEach(client =>


    client.send(JSON.stringify(refinedData)))


    setTimeout(() => {find()},2000)
}

find()

app.use(cors())
app.use(express.json());
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

UserController(app);
NewsController(app,wsServer);


app.listen(process.env.PORT || 4000);


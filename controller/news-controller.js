import axios from 'axios';
import {response} from "express";
import News from "../models/newsModel.js";



const NewsController = (app,wsServer) => {
    let currentUser = null;

    const findAllNews = async (req, res) => {
        const data = await findAllNews()


        res.json(data.data);

        var news = data.data.map(data => Object.assign(new News(),data))
        console.log('Logging', news)

    };


    app.get("/api/news", findAllNews);
};







export default NewsController;

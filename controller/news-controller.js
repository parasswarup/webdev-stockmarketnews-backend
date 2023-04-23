import axios from 'axios';
import {response} from "express";
import News from "../models/news-model.js";
import * as NewsDao from "../daos/news-dao.js"



const NewsController = (app) => {
    let currentUser = null;

    const findAllNews = async (req, res) => {
        const data = await NewsDao.findAllNews()

        res.json(data);
    };

    const createNews = async (req, res) => {
        const news = req.body;
        // tuits.push({ ...tuit, id: new Date().getTime() });
        const newNews = await NewsDao.createNews(news);
        res.json(newNews);
    };

    const findNewsByID = async (req, res) => {
        console.log("NEWS BY ID")
        const data = await NewsDao.findNewsById(req.params.id)
        console.log(data)
        res.json(data);
    };

    app.post("/api/news", createNews);
    app.get("/api/news", findAllNews);
    app.get("/api/news/:id", findNewsByID);
};









export default NewsController;

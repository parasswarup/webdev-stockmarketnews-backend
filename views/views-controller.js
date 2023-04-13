import axios from 'axios';
import {response} from "express";
import News from "../models/news-model.js";
import views from "./views.js"
import * as ViewsDao from "../daos/views-dao.js";



const ViewsController = (app) => {
    let currentUser = null;

    const findAllViews = async (req, res) => {

        console.log("reaching here in views")
        const data = await ViewsDao.findAllViews()
        console.log(data)
        res.json(data);
        //res.json(views);
    };

    const createView = async (req, res) => {
        const news = req.body;
        // tuits.push({ ...tuit, id: new Date().getTime() });
        const newNews = await ViewsDao.createView(news);
        res.json(newNews);
    };


    const deleteView = (req, res) => {
        ViewsDao.deleteView(id).then(() => res.sendStatus(200));
    };

    app.post("/api/views", createView);
    app.get("/api/views", findAllViews);
    app.delete("/api/views/:id", deleteView);
};


export default ViewsController;

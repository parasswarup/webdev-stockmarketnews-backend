import axios from 'axios';
import {response} from "express";
import News from "../models/news-model.js";
import views from "../views/views.js"
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


    const deleteView = async (req, res) => {
        const viewIdToDelete = req.params.id;
        const status = await ViewsDao
            .deleteView(viewIdToDelete);
        res.json(status);
    };

    const updateView = (req, res) => {
        const viewId = req.params.id;
        const newView = req.body;
        const index = users.findIndex((user) => user._id === userId);
        if (index === -1) {
            res.sendStatus(404);
            return;
        }
        users[index] = newUser;
        res.sendStatus(200);
    };

    app.post("/api/views", createView);
    app.get("/api/views", findAllViews);
    app.delete("/api/views/:id", deleteView);
    app.put("api/views/:id", updateView);
};


export default ViewsController;

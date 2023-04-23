import * as ViewsDao from "../daos/views-dao.js";
import {decreaseViewLikeCount, increaseViewLikeCount} from "../daos/views-dao.js";



const ViewsController = (app) => {

    const findAllViews = async (req, res) => {

        console.log("reaching here in views")
        const data = await ViewsDao.findAllViews()
        console.log(data)
        res.json(data);
        //res.json(views);
    };

    const findAllViewComments = async (req, res) => {

        console.log("reaching here in views")
        const data = await ViewsDao.findAllViewComments(req.params.vid)
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

    const updateView = async (req, res) => {
        console.log("here i am",req.body);
        const status = await ViewsDao.updateView(req.params.id, req.body);
        res.send(status);
    };

    const addViewComment = async (req, res) => {
        const insertedComment = await ViewsDao.addViewComment(req.params.vid, req.body);
        res.json(insertedComment);
    };

    const deleteViewComment = async (req, res) => {
        const status = await ViewsDao.deleteViewComment(req.params.vid, req.params.cid);
        res.send(status);
    };

    const updateViewCommentCount = async (req, res) => {
        const status = await ViewsDao.updateViewCommentCount(req.params.vid, req.params.count);
        res.send(status);
    };

    const updateViewLikeCount = async (req, res) => {
        const status = await ViewsDao.updateViewLikeCount(req.params.vid, req.params.count);
        res.send(status);
    };

    const increaseViewLikeCount = async (req, res) => {
        const status = await ViewsDao.increaseViewLikeCount(req.params.vid);
        res.send(status);
    };

    const decreaseViewLikeCount = async (req, res) => {
        const status = await ViewsDao.decreaseViewLikeCount(req.params.vid);
        res.send(status);
    };

    const getViewLikeCount = async (req, res) => {
        const status = await ViewsDao.getViewLikeCount(req.params.vid);
        res.send(status);
    };

    app.post("/api/views", createView);
    app.get("/api/views", findAllViews);
    app.delete("/api/views/:id", deleteView);
    app.get("/api/views/comment/:vid", findAllViewComments);
    app.put("/api/views/:id", updateView);
    app.put("/api/views/comment/:vid", addViewComment);
    app.put("/api/views/comment/:vid/:cid", deleteViewComment);
    app.put("/api/views/comment/count/:vid/:count", updateViewCommentCount);
    app.put("/api/views/like/count/:vid/:count", updateViewLikeCount);

    app.put("/api/views/like/increase/:vid", increaseViewLikeCount);

    app.put("/api/views/like/decrease/:vid", decreaseViewLikeCount);

    app.get("/api/views/like/:vid", getViewLikeCount);
};


export default ViewsController;

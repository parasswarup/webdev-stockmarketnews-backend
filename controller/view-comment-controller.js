import * as ViewCommentDao from "../daos/view-comment-dao.js";


const ViewsCommentController = (app) => {
    const findAllViewComment = async (req, res) => {

        console.log("reaching here in views")
        const data = await ViewCommentDao.findAllViewComments();
        console.log(data)
        res.json(data);
        //res.json(views);
    };

    const findAllViewCommentsByUser = async (req, res) => {

        console.log("reaching here in views")
        const data = await ViewCommentDao.findAllViewCommentsByUser(req.params.id);
        console.log(data)
        res.json(data);
        //res.json(views);
    };

    const createViewComment = async (req, res) => {
        const newViewComment = await ViewCommentDao.createViewComment(req.body)
        res.json(newViewComment);
    };


    const deleteViewComment = async (req, res) => {
        const viewIdToDelete = req.params.id;
        const status = await ViewCommentDao
            .deleteViewComment(viewIdToDelete);
        res.json(status);
    };

    const updateViewComment = async (req, res) => {
        console.log("here i am",req.body);
        const status = await ViewCommentDao.updateViewComment(req.params.id, req.body);
        res.send(status);
    };

    app.post("/api/viewComment", createViewComment);
    app.get("/api/viewComment", findAllViewComment);
    app.get("/api/viewComment/user/:id", findAllViewCommentsByUser);
    app.delete("/api/viewComment/:id", deleteViewComment);
    app.put("/api/viewComment/:id", updateViewComment);
};


export default ViewsCommentController;
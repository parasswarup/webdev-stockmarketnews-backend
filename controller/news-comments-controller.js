
import  * as newsCommentsDao from "../daos/news-comments-dao.js"


const NewsCommentsController = (app) =>{

    const createNewsComment = async (req, res) => {

        console.log("NEWS COMMENT",req.body)
        const newNewsComment = await newsCommentsDao.createNewsComments({...req.body, date:Date.now()

        });
        console.log(newNewsComment)
        res.json(newNewsComment);
    }

    const findAllNewsComments = async (req,res) => {
        const allNewsComments = await newsCommentsDao.findAllNewsComments(req.params.newsID);
        res.json(allNewsComments)
    }
    const findNewsByUser = async (req,res) => {
        const allNews = await newsCommentsDao.findNewsCommentsByUser(req.params.userID);
        console.log("Printing all COMMENTS",allNews)
        res.json(allNews)
    }


    const deleteNewsComment = async (req,res) => {
        const newsComment = await newsCommentsDao.deleteNewsComment(req.params.commentID);
        res.json(newsComment)

    }
    const updateNewsComment = async (req,res) => {
        const newsComment = await newsCommentsDao.updateNewsComment(req.params.commentID,{...req.body,date:Date.now()});
        res.json(newsComment)

    }


    app.post("/api/news/comments", createNewsComment)
    app.get("/api/news/comments/:newsID", findAllNewsComments)
    app.get("/api/news/comments/user/:userID", findNewsByUser)
    app.delete("/api/news/comments/:commentID", deleteNewsComment)
    app.put("/api/news/comments/:commentID", updateNewsComment)

}

export default NewsCommentsController
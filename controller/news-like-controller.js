
import  * as newsLikeDao from "../daos/news-likes-dao.js"



const NewsLikesController = (app) =>{

    const createNewsLike = async (req, res) => {

        console.log("NEWS COMMENT",req.body)
        const newNewsLikes = await newsLikeDao.createNewsLikes({...req.body, date:Date.now()

                                                                        });
        console.log(newNewsLikes)
        res.json(newNewsLikes);
    }

    /*const findAllNewsComments = async (req,res) => {
        const allNewsComments = await newsCommentsDao.findAllNewsComments(req.params.newsID);
        res.json(allNewsComments)
    }*/
    const findAllNewsByUser = async (req,res) => {
        const allNews = await newsLikeDao.findAllNewsLikedByUser(req.params.userID);
        console.log("Printing all COMMENTS",allNews)
        res.json(allNews)
    }
    const newsLikeCount = async (req,res) => {
        const count = await newsLikeDao.newsLikeCount(req.params.newsID);
        res.json(count)
    }

    const newsLikeUser = async (req,res) => {
        const status = await newsLikeDao.newsLikeUser(req.query.user,req.query.news);
        res.json(status)
    }


    const updateNewsLike = async (req,res) => {
        const newsLike = await newsLikeDao.updateNewsLike(req.query.news,req.query.user,req.query.like);
        res.json(newsLike)

    }


    app.post("/api/news/likes", createNewsLike)
    //app.get("/api/news/likes/:newsID", findAllNewsComments)
    app.get("/api/news/likes/user/:userID", findAllNewsByUser)
    //app.delete("/api/news/likes", deleteNewsComment)
    app.get("/api/news/likes/user", newsLikeUser)
    app.get("/api/news/likes/count/:newsID", newsLikeCount)
    app.put("/api/news/likes", updateNewsLike)

}

export default NewsLikesController
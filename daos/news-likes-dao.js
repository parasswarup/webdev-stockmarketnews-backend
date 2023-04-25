import NewsLikesModel from "../models/news-likes-model.js";
import news from "../mongooseSchema/news.js";
import NewsModel from "../models/news-model.js";


export const createNewsLikes  = async (newsLikes) => {
    const status = await NewsLikesModel.create(newsLikes)
    return status

}

export const newsLikeCount  = async (newsID) => {

    const count = await NewsLikesModel.count({"news": newsID,"like":true})

    return count
}
export const newsLikeUser  = async (userID,newsID) => {

    const record = await NewsLikesModel.findOne({"news": newsID,"user":userID})

    if(record!=null){
        return record.like}
        else{
            return false
    }




}

export const findAllNewsLikedByUser = async (uid) => {
    const status = await NewsLikesModel.find({"user": uid,"like":true}).populate("news")

    return status

}

export const findAllNewsLikes  = (newsID ) => {
    console.log(newsID)
    const status = NewsLikesModel.count({ "news._id": newsID,"like":true})
    return status

}

export const updateNewsLike  = async (newsID, user, like) => {


    const existLike = await NewsLikesModel.findOne({"user": user, "news": newsID});

    if(existLike){

        const status = await NewsLikesModel.updateOne({"user": user, "news": newsID},{ "like": like})
        return status
    }
    else {
        const news = await NewsModel.findOne({"_id":newsID}).exec()

        if(news==null){
            return
        }
       const  status = await createNewsLikes({"user": user,"news":news,"like":like,"date":Date.now()})

        return status
    }

}




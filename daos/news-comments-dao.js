import NewsCommentsModel from "../models/news-comments-model.js";

export const createNewsComments  = (newsComments ) => {
    const status = NewsCommentsModel.create(newsComments)
    return status

}

export const findNewsCommentsByUser = async (uid) => {
    const status = await NewsCommentsModel.distinct("news", {"user": uid})


    return status

}

export const findAllNewsComments  = (newsID ) => {
    console.log(newsID)
    const status = NewsCommentsModel.find({ "news._id": newsID}).populate("user").sort({date:'desc'}).exec()
    return status

}

export const newsCommentsCount  = async (newsID) => {
    console.log(newsID)
    const status = await NewsCommentsModel.count({"news._id": newsID})

    return status

}


export const deleteNewsComment  = (commentID ) => {
    const status = NewsCommentsModel.deleteOne({_id:commentID})
    return status
}

export const updateNewsComment  = (commentID ,payload) => {
    const status = NewsCommentsModel.updateOne({_id:commentID},payload)
    return status
}
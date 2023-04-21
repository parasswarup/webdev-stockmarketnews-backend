import NewsCommentsModel from "../models/news-comments-model.js";

export const createNewsComments  = (newsComments ) => {
    const status = NewsCommentsModel.create(newsComments)
    return status

}

export const findNewsComments  = (commentID ) => {
    const status = NewsCommentsModel.findOne(commentID)
    return status

}

export const findAllNewsComments  = (newsID ) => {
    const status = NewsCommentsModel.find({news: newsID}).sort({date:'desc'})
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
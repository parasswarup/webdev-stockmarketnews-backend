import ViewLikesModel from "../models/view-likes-model.js";

export const createViewLikes  = (newsComments ) => {
    const status = ViewLikesModel.create(newsComments)
    return status

}

export const findViewLikesByUser = async (uid) => {
    const status = await ViewLikesModel.distinct("news", {"user": uid})


    return status

}

export const findAllViewLikes  = (newsID ) => {
    console.log(newsID)
    const status = ViewLikesModel.find({ "news._id": newsID}).populate("user").sort({date:'desc'}).exec()
    return status

}

export const deleteViewLikes  = (commentID ) => {
    const status = v.deleteOne({_id:commentID})
    return status

}

export const updateViewLikes  = (commentID ,payload) => {
    const status = ViewLikesModel.updateOne({_id:commentID},payload)
    return status
}
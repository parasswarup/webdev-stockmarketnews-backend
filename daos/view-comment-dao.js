import ViewCommentModel from "../models/view-comment-model.js";

export const findAllViewCommentsByUser = async (uid) => {
    console.log(uid)
    return ViewCommentModel.distinct("views", {"user": uid})
}

export const findAllViewComments = async (viewID) => {
    console.log(viewID)
    return ViewCommentModel.find({ "views._id": viewID}).populate("user").sort({date:'desc'}).exec()
}

export const createViewComment = async (comment) => {
    return ViewCommentModel.create(comment);
}

export const updateViewComment = async (id, view) => {
    return ViewCommentModel.updateOne({ _id: id }, view);
}

export const deleteViewComment = (uid) => {
    const status = ViewCommentModel.deleteOne({ _id: uid });
    return status
}


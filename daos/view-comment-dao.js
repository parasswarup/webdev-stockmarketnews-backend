import ViewCommentModel from "../models/views-comment-model.js";

export const findAllViewComments = async () => {
    return ViewCommentModel.find();
}

export const createViewComment = async (comment) => {
    return ViewCommentModel.create(comment);
}

export const updateViewComment = async (id, view) => {
    return ViewCommentModel.updateOne({ _id: id }, view);
}

export const deleteViewComment = (uid) => ViewCommentModel.deleteOne({ _id: uid });
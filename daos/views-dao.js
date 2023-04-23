import ViewsModel from "../models/views-model.js";

export const findAllViews = async () => {
    return ViewsModel.find();
}

export const findAllViewComments = async (vid) => {
    return ViewsModel.find({"_id" :vid});
}

export const createView = async (view) => {
    return await ViewsModel.create(view);
}

export const addViewComment = async (vid, comment) => {
    return ViewsModel.findByIdAndUpdate(
        {_id: vid},
        {
            $push:{"comment": comment}
        },
        {new: true}
    )

    //return ViewsModel.updateOne({ _id: vid }, {$push : {"comment": comment}});
}

export const deleteViewComment = async (vid, cid) => {
    return ViewsModel.updateOne({ _id: vid }, {$pull : {"comment": {_id: cid}}});
}

export const updateView = async (id, view) => {
    return ViewsModel.updateOne({ _id: id }, view);
}

export const deleteView = (uid) => ViewsModel.deleteOne({ _id: uid });

export const updateViewCommentCount = async (vid, count) => {
    return ViewsModel.updateOne({ _id: vid }, { $set: { messageCount : count  }} );
}

export const updateViewLikeCount = async (vid, count) => {
    return ViewsModel.updateOne({ _id: vid }, { $set: { likes : count  }} );
}

export const increaseViewLikeCount = async (vid) => {
    return ViewsModel.updateOne({ _id: vid }, { $inc: { likes : 1  }} );
}


export const decreaseViewLikeCount = async (vid) => {
    return ViewsModel.updateOne({ _id: vid }, { $inc: { likes : -1  }} );
}

export const getViewLikeCount = async (vid) => {
    return ViewsModel.find({ _id: vid }, {"likes": "$likes"});
}
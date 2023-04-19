import ViewsModel from "../models/views-model.js";

export const findAllViews = async () => {
    return ViewsModel.find();
}

export const createView = async (view) => {
    return await ViewsModel.create(view);
}

export const updateView = async (id, view) => {
    return ViewsModel.updateOne({ _id: id }, view);
}

export const deleteView = (uid) => ViewsModel.deleteOne({ _id: uid });
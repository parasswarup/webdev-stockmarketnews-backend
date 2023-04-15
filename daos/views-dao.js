import ViewsModel from "../models/views-model.js";

export const findAllViews = async () => {
    return ViewsModel.find();
}

export const createView = async (view) => {
    return await ViewsModel.create(view);
}

export const updateView = async (view) => {
    return ViewsModel.updateOne(view);
}

export const deleteView = (uid) => ViewsModel.deleteOne({ _id: uid });
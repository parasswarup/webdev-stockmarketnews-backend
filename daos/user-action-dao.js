import UserActionModel from "../models/user-action-model.js";

export const findAllLikedNewsByUser = (userId) => {
    return UserActionModel.find(userId);
}

export const findAllLikedViewsByUser = (userId) => {
    return UserActionModel.find(userId);
}

export const findAllPostedViewsByUser = (userId) => {
    return UserActionModel.find(userId);
}
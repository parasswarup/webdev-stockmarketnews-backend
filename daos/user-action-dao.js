import UserActionModel from "../models/user-action-model.js";

export const findAllLikedNewsByUser = (userId) => {
    return UserActionModel.find(userId);
}

export const findAllLikedViewsByUser = (userId) => {
    return UserActionModel.find({"userId": userId});
}

export const createUserAction = (userAction) => {
    return UserActionModel.create(userAction);
}

export const checkIfUserExists = (userId) => {
    return UserActionModel.find({"userId" : userId}).count();
}

export const hasUserLikedView = (userId, viewId) => {
    return UserActionModel.find({"userId" : userId}).count();
}

export const addNewLikeViewToUser = (userId, data) => {
    return UserActionModel.updateOne({"userId" : userId}, {$push : {likedView : data}});
}

export const removeLikeViewFromUser = (userId, viewId) => {
    return UserActionModel.updateOne({"userId" : userId}, {$pull : {likedView : {viewId: viewId}}});
}
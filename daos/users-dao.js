import UserModel from "../models/users-model.js";

export const findAllUsers = async () => {
    return UserModel.find();
}

export const createUser = async (user) => {
    return await UserModel.create(user);
}

export const findUserByCredentials = (username, password) =>
    UserModel.findOne({ username, password });

export const findUserByEmailAddress = (email) =>
     UserModel.findOne({ email });

export const deleteUser = (uid) => UserModel.deleteOne({ _id: uid });
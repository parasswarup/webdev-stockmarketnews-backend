import UserModel from "../models/users-model.js";

export const findAllUsers = async () => {
    return UserModel.find();
}

export const createUser = async (user) => {
    return await UserModel.create(user);
}

export const findUserByCredentials = (username, password) =>
    UserModel.findOne({ username, password });

export const findUserByUsername = (username) =>
    UserModel.findOne({ username });

export const findUserByEmailAddress = async (email) => {
    return  UserModel.findOne({email:email});
}

export const deleteUser = (uid) => UserModel.deleteOne({ _id: uid });
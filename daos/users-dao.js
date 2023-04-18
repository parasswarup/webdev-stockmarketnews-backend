import UserModel from "../models/users-model.js";

export const findAllUsers = () => {
    return UserModel.find();
}

export const createUser = (user) => {
    return UserModel.create(user);
}

export const findUserById = (uid) => UserModel.findById(uid);

export const findUserByEmailAddress = async (email) => {
    return  UserModel.findOne({email:email});
}

export const updateUser = (uid, user) => UserModel.updateOne({ _id: uid }, user);

export const deleteUser = (uid) => UserModel.deleteOne({ _id: uid });
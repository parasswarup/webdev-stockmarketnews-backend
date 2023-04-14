import PrivilegeModel from "../models/privilege-model.js";


export const createPrivilege = async (uid) => {
    return await PrivilegeModel.create({user: uid});
};

export const getPrivileges = async () => {
    return await PrivilegeModel.find().populate("user").exec();
};

export const getPrivilegeByUser = async (uid) => {
    return await PrivilegeModel.findOne({user:uid}).exec();
};

export const updatePrivilegeByUserTrue = async (uid,privilege) => {

    if (privilege=="allowViews") {
        return PrivilegeModel.updateOne(
            {user: uid},
            {$set: {allowViews: true}});
    }
    if (privilege=="allowSignIn") {
        return  PrivilegeModel.updateOne(
            {user: uid},
            {$set: {allowSignIn: true}});
    }

    if (privilege=="allowLikes") {
        return  PrivilegeModel.updateOne(
            {user: uid},
            {$set: {allowLikes: true}});
    }


};

export const updatePrivilegeByUserFalse = async (uid,privilege) => {

    if (privilege=="allowViews") {
        return PrivilegeModel.updateOne(
            {user: uid},
            {$set: {allowViews: false}});
    }
    if (privilege=="allowSignIn") {
        return  PrivilegeModel.updateOne(
            {user: uid},
            {$set: {allowSignIn: false}});
    }

    if (privilege=="allowLikes") {
        return  PrivilegeModel.updateOne(
            {user: uid},
            {$set: {allowLikes: false}});
    }


};


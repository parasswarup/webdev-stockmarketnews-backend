import * as userActionDao from "../daos/user-action-dao.js";
import {findAllLikedNewsByUser, findAllLikedViewsByUser} from "../daos/user-action-dao.js";
import * as NewsDao from "../daos/news-dao.js";
import * as ViewsDao from "../daos/views-dao.js";


const UserActionController = (app) => {
    const findAllLikedNewsByUser = async (req, res) => {
        const userId = req.params.userId;
        const allNews = await userActionDao.findAllLikedNewsByUser(userId);
        if (allNews) {
            res.json(allNews);
        } else {
            res.sendStatus(404);
        }
    };

    const findAllLikedViewsByUser = async (req, res) => {
        const userId = req.params.userId;
        const allViews = await userActionDao.findAllLikedViewsByUser(userId);
        if (allViews) {
            res.json(allViews);
        } else {
            res.sendStatus(404);
        }
    };

    const findUserByEmail = async (req, res) => {
        const email = req.params.email;
        const result = await userActionDao.findUserByEmailAddress(email);
        res.json(result);
    }

    const findUserById = async (req, res) => {
        const userId = req.params.userId;
        const user = await userActionDao.findUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };
    const updateUser = (req, res) => {
        const userId = req.params.userId;
        const newUser = req.body;
        userActionDao.updateUser(userId, newUser).then(() => res.json(newUser));
        req.session["currentUser"] = newUser;
    };
    const deleteUser = (req, res) => {
        const userId = req.params.userId;
        userActionDao.deleteUser(userId).then(() => res.sendStatus(200));
    };

    const createUserAction = async (req, res) => {
        const userAction = req.body;
        const flag = await userActionDao.checkIfUserExists(userAction.userId);


        if (flag !== 1) {
            const newUserAction = await userActionDao.createUserAction(userAction);
            console.log("Inside backend createUserAction2 - ", newUserAction);
            res.json(newUserAction);
        } else {
            res.json(flag)
        }

    };

    const hasUserLikedView = async (req, res) => {
        const userId = req.params.userId;
        const viewId = req.params.viewId;
        const status = await userActionDao.hasUserLikedView(userId, viewId);
        res.json(status);

    };

    const addNewLikeViewToUser = async (req, res) => {
        const userId = req.params.userId;
        const data = req.body;
        const status = await userActionDao.addNewLikeViewToUser(userId, data);
        res.send(status);

    };

    const removeLikeViewFromUser = async (req, res) => {
        const userId = req.params.userId;
        const viewId = req.params.viewId;
        const status = await userActionDao.removeLikeViewFromUser(userId, viewId);
        res.send(status);

    };

    // app.get("/api/userAction", findAllUsers);
    app.get("/api/userAction/likedNews/:userId", findAllLikedNewsByUser);
    app.get("/api/userAction/likedViews/:userId", findAllLikedViewsByUser);
    app.get("/api/userAction/likedViews/:userId/:viewId", hasUserLikedView);
    app.put("/api/userAction/likedViews/add/:userId", addNewLikeViewToUser);
    app.put("/api/userAction/likedViews/remove/:userId/:viewId", removeLikeViewFromUser);
    app.put("/api/userAction/updateLikedViews/:userId", updateUser);
    app.put("/api/userAction/updateLikedNews/:userId", updateUser);
    app.post("/api/userAction", createUserAction);
    app.put("/api/userAction/:userId", updateUser);
    app.delete("/api/userAction/:userId", deleteUser);
};

export default UserActionController;

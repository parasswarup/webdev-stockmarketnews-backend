import * as userActionDao from "../daos/user-action-dao.js";


const UserActionController = (app) => {
    const findAllUsers = async (req, res) => {
        if (req.session["currentUser"] && req.session.currentUser.role === "ADMIN") {
            await userActionDao.findAllUsers()
                .then((users) => res.json(users));
        } else {
            res.sendStatus(403);
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

    app.get("/api/userAction", findAllUsers);
    app.get("/api/userAction/:userId", findUserById);
    app.get("/api/userAction/email/:email", findUserByEmail);
    app.put("/api/userAction/:userId", updateUser);
    app.put("/api/userAction/:userId", updateUser);
    app.delete("/api/userAction/:userId", deleteUser);
};

export default UserActionController;

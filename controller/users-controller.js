import * as usersDao from "../daos/users-dao.js";


const UserController = (app) => {
    const findAllUsers = async (req, res) => {
        if (req.session["currentUser"] && req.session.currentUser.role === "ADMIN") {
            await usersDao.findAllUsers()
                .then((users) => res.json(users));
        } else {
            console.log("YOU ARE NOT AN ADMIN", req.session["currentUser"])
            res.sendStatus(403);
        }
    };

    const findUserByEmail = async (req, res) => {
        const email = req.params.email;
        const result = await usersDao.findUserByEmailAddress(email);
        res.json(result);
    }

    const findUserById = async (req, res) => {
        const userId = req.params.userId;
        const user = await usersDao.findUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };
    const updateUser = (req, res) => {
        const userId = req.params.userId;
        const newUser = req.body;
        usersDao.updateUser(userId, newUser).then(() => res.json(newUser));
        req.session["currentUser"] = newUser;
    };
    const deleteUser = (req, res) => {
        const userId = req.params.userId;
        usersDao.deleteUser(userId).then(() => res.sendStatus(200));
    };

    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.get("/api/users/email/:email", findUserByEmail);
    app.put("/api/users/:userId", updateUser);
    app.delete("/api/users/:userId", deleteUser);
};

export default UserController;

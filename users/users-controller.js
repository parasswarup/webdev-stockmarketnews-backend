import users from "./users.js";
import * as usersDao from "../daos/users-dao.js";
import {findUserByEmailAddress} from "../daos/users-dao.js";

const UserController = (app) => {
    const findAllUsers = (req, res) => {
        if (req.session["currentUser"] && req.session.currentUser.role === "ADMIN") {
            usersDao.findAllUsers()
                .then((users) => res.json(users));
        } else {
            res.sendStatus(403);
        }
    };

    const findUserByEmail = (req, res) => {
        const email = req.params.email;
        const result = usersDao.findUserByEmailAddress(email);
        res.json(result);
    }

    const findUserById = (req, res) => {
        const userId = req.params.userId;
        const user = users.find((user) => user._id === userId);
        if (user) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    };
    const updateUser = (req, res) => {
        const userId = req.params.userId;
        const newUser = req.body;
        const index = users.findIndex((user) => user._id === userId);
        if (index === -1) {
            res.sendStatus(404);
            return;
        }
        users[index] = newUser;
        res.sendStatus(200);
    };
    const deleteUser = (req, res) => {
        const userId = req.params.userId;
        usersDao.deleteUser(userId).then(() => res.sendStatus(200));
    };

    const register = async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const age = req.body.age;
        const email = req.body.email;
        const user = await usersDao.findUserByEmailAddress(email)
        if (user) {
            console.log("PARAS1")
            res.sendStatus(409);
            return;
        }
        const newUser = { username, password, firstName, lastName, age, role: "REGISTERED", email};
        await usersDao.createUser(newUser).then(r => res.json(r));
    };


    app.post("/api/users/register", register);
    app.post("/api/users/login", async (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const user = await usersDao.findUserByCredentials(username, password);
        if (user) {
            req.session["currentUser"] = user;
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    });
    app.post("/api/users/profile", (req, res) => {
        if (!req.session["currentUser"]) {
            res.sendStatus(404);
            return;
        }
        res.json(req.session["currentUser"]);
    });
    app.post("/api/users/logout", (req, res) => {
        //currentUser = null;
        req.session.destroy();
        res.sendStatus(200);
    });

    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.get("/api/users/email/:email", findUserByEmail);
    app.put("/api/users/:userId", updateUser);
    app.delete("/api/users/:userId", deleteUser);
};

export default UserController;

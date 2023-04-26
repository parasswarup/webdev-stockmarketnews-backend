import * as privilegeDao from "../daos/privilege-dao.js"
import {getPrivilegeByUser} from "../daos/privilege-dao.js";



export const PrivilegeController=(app)=>{

const getPrivileges=async (req, res) => {
    const privileges = await privilegeDao.getPrivilegeByUser(req.params.userID)
    res.json(privileges);


}

    const setPrivileges=async (req, res) => {
    console.log("privileges",req.body)
        const status = await privilegeDao.setPrivileges(req.params.userID,req.body)
        res.json(status);
    }

    app.get("/api/privileges/:userID", getPrivileges);
    app.put("/api/privileges/:userID", setPrivileges);
}
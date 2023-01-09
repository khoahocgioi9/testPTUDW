import express from 'express';

import bcrypt from 'bcrypt';
import userModel from '../models/user.model.js'





const router = express.Router();
router.get("/profile",  async function (req, res) {  // phai co Auth
   // const userdata = req.session.loggedinUser;
    const users = await userModel.findbyID(1);
    res.render("vwAccount/profile", {
        users,
    });
});

router.post("/profile", async function (req, res) {


    try {


        const hashedPass = bcrypt.hashSync(req.body.PASSWORD, 10);


        const newUser = {
            ID_USER: req.body.ID_USER,
            USERNAME: req.body.USERNAME,
            PASSWORD: hashedPass,
            FULLNAME: req.body.FULLNAME,
            EMAIL: req.body.EMAIL,
            TYPE: 1,
            PROFILE: req.body.PROFILE,
        };

        //get user password in db to compare
        const user = await userModel.findbyID(newUser.ID_USER);


        const ret = bcrypt.compareSync(req.body.OldPassword, user.PASSWORD);




        if (ret) {

            await userModel.update(newUser);

            res.render("vwAccount/profile", {
                users: newUser,
                err_message: "Update Successfull!!!",
            });
        } else {
            res.render("vwAccount/profile", {
                // userdata: req.session.loggedinUser,  sesson cua log in , đợi có hàm log in
                err_message: "Incorrect password!!!",
            });
        }
    } catch (error) {
        res.render("vwAccount/profile", {
          //  userdata: req.session.loggedinUser, như trên
            err_message: " Sorry! pls check again",
        });
        console.log(error);
    }
});

export default router;
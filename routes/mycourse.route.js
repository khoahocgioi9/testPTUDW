import userCourseModel from '../models/user-course.model.js'
import userModel from '../models/user.model.js'
import topCourseModel from '../models/topCourse.model.js'
import wishlistModel from '../models/wishlist.model.js'
import courseModel from '../models/course.model.js'

import express from 'express';
const router = express.Router();
router.get("/", async function (req, res) {
    //const userid = req.session.loggedinUser.ID_USER; đợi có hàm log in

    const items = [];
    //let courseInWishList = await wishlistModel.findAllbyUserID(userid);
    //test
    let myCourse = await userCourseModel.findAllbyUserID(1);


    for (let item of myCourse) {
        //get information of instructor and course to show in quick view
        let course = await courseModel.findbyID(item.ID_COURSE);
        //let instructor = await userModel.findbyID(course.ID_USER);

        //calculate discount price
        let realPrice = 0;
        let isDiscount = true;
        if (course.DISCOUNT === 0) {
            realPrice = course.PRICE;
            isDiscount = false;
        } else {
            let price = +course.PRICE,
                sale = +course.DISCOUNT;
            realPrice = price - (price * sale) / 100;
        }

        items.push({

            course,
            // instructor,
            realPrice,
            isDiscount,
        });
    }
    res.render("vwCourse/mycourse", {
        CourseName: "My Course",
        items,
        isEmpty: items.length === 0,
    });


});










export default router;
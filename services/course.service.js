import db from "../utils/db.js";
import moment from "moment";

export default {
  findAll() {
    return db("course");
  },

  async findById(id) {
    const list = await db("course").where("ID_COURSE", id);
    if (list.length === 0) return null;

    return list[0];
  },

  async findAllByFieldId(id) {
    const list = await db("course").where("ID_FIELD", id);
    if (list.length === 0) return null;

    return list;
  },

  async findAllByCatergoryId(id) {
    const list = await db("course").where("ID_CATE", id);
    if (list.length === 0) return null;

    return list;
  },

  async add() {
    let course = {
      ID_FIELD: 1,
      ID_CATE: 1,
      // ID_USER: req.session.authUser.ID_USER,
      ID_USER: 1,

      COURSENAME: "data.CourseName",
      LENGTHS: 0,
      CREATEDATE: moment().format("YYYY-MM-DD"),
      LASTUPDATE: moment().format("YYYY-MM-DD"),
      PRICE: 0,
      VIEWED: 0,
      DESCRIPTIONS: "data.FullDes",
      DISCOUNT: 0,
      SHORTDES: "data.ShortDes",
      RATENUM: 0,
      STUNUM: 0,
    };
    let num = await db("course")
      .insert(course, ["ID_COURSE"])
      .then(function (result) {
        console.log(result);
        return result[0]; // respond back to request
      });
    return num;
  },

  del(id) {
    return db("course").where("ID_COURSE", id).del();
  },

  patch(course) {
    const id = course.id;
    delete course.id;

    return db("course").where("ID_COURSE", id).update(course);
  },
};

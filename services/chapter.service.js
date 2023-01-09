import db from '../utils/db.js';

export default {
  async findAll() {
    return db('chapter');
  },

  async findById(id) {
    const list = await db('chapter').where('ID_CHAPTER', id);
    if (list.length === 0)
      return null;

    return list[0];
  },
  
  async findAllByCourseId(id) {
    const list = await db('chapter').where('ID_COURSE', id).orderBy("ID_CHAPTER","asc");
    
    if (list.length === 0)
      return null;

    return list;
  },

  // add(chapter) {
  //   return db('chapter').insert(chapter, ['ID_CHAPTER'])[0];
  // },

  async add(chap) {
    // let chap = {
    //   ID_COURSE: 1,
    //   CHAPTERNAME: "S",
  
    // };
    let num = await db("chapter")
      .insert(chap, ["ID_CHAPTER"])
      .then(function (result) {
        console.log(result);
        return result[0]; // respond back to request
      });
    return num;
  },

  del(id) {
    return db('chapter').where('ID_CHAPTER', id).del();
  },

  patch(chapter) {
    const id = chapter.id;
    delete chapter.id;

    return db('chapter').where('ID_CHAPTER', id).update(chapter);
  }
}
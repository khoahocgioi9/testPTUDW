import db from '../utils/db.js';

export default {
   findAll() {
    return db('lesson');
  },

   async findById(id) {
    const list = await db('lesson').where('ID_LESSON', id);
    if (list.length === 0)
      return null;

    return list[0];
  },

 async findAllByChapterId(id) {
    const list = await db('lesson').where('ID_CHAPTER', id).orderBy("ID_LESSON", "asc");
    if (list.length === 0)
      return null;

    return list;
  },

  async add(les) {
    let num = await db("lesson")
      .insert(les, ["ID_LESSON"])
      .then(function (result) {
        console.log(result);
        return result[0]; // respond back to request
      });
    return num;
  },

  // add(lesson) {
  //   return db('lesson').insert(lesson);
  // },

  del(id) {
    return db('lesson').where('ID_LESSON', id).del();
  },

  patch(lesson) {
    const id = lesson.id;
    delete lesson.id;

    return db('lesson').where('ID_LESSON', id).update(lesson);
  }
}
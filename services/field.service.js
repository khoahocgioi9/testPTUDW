import db from '../utils/db.js';

export default {
  findAll() {
    return db('field');
  },

  async findById(id) {
    const list = await db('field').where('ID_FIELD', id);
    if (list.length === 0)
      return null;

    return list[0];
  },


  add(field) {
    return db('field').insert(field,['ID_FIELD'])[0];
  },

  del(id) {
    return db('field').where('ID_FIELD', id).del();
  },

  patch(field) {
    const id = field.id;
    delete field.id;

    return db('field').where('ID_FIELD', id).update(field);
  }
}
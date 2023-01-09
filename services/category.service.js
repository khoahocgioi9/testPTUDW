import db from '../utils/db.js';

export default {
  findAll() {
    // const category = { CatID: 1, CatName: 'Laptop' };
    return db('category');
  },

  async findById(id) {
    const list = await db('category').where('ID_CATE', id);
    if (list.length === 0)
      return null;

    return list[0];
  },
  
   async findAllByFieldId(id) {
    const list = await db('category').where('ID_FIELD', id);
    if (list.length === 0)
      return null;

    return list;
  },

  add(newCategory) {
    // list.push(newCategory);
    return db('category').insert(newCategory);
  },

  del(id) {
    return db('category').where('ID_CATE', id).del();
  },

  patch(category) {
    const id = category.ID_CATE;
    delete category.ID_CATE;

    return db('category').where('ID_CATE', id).update(category);
  }
}
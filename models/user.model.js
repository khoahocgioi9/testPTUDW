import db from '../utils/db.js';

export default{
    async findbyID(id){
        const list = await db('users').where('ID_USER',id);

        if(list.length === 0){

            return null;
        }

        return list[0];


    },

    async update(entity) {
        const id = entity.ID_USER;
        delete entity.ID_USER;
        return await db('users')
            .where('ID_USER',id)
            .update(entity);
    },



}
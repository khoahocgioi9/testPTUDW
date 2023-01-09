import db from '../utils/db.js';

export default {
    async findbyID(id){
        const list = await db('lesson').where('ID_LESSON',id);

        if(list.length === 0){

            return null;
        }


        return list[0];


    },
    async findbyIDChapter(id) {
        const list = await db('lesson').where('ID_CHAPTER', id);

        if (list.length === 0) {

            return null;
        }




        return list;


    },
}
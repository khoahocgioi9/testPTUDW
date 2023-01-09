import db from '../utils/db.js';

export default {
    async findbyID(id){
        const list = await db('chapter').where('ID_CHAPTER',id);

        if(list.length === 0){

            return null;
        }


        return list[0];


    },
    async findbyIDCourse(id) {
        const list = await db('chapter').where('ID_COURSE', id);

        if (list.length === 0) {

            return null;
        }



        return list;


    },
}
import db from '../utils/db.js';

export default{
    async findbyID(id_course,id_detail){
        const list = await db('detail').where('ID_DETAIL',id_detail ).where('ID_COURSE',id_course);

        if(list.length === 0){

            return null;
        }



        return list[0];


    }

}
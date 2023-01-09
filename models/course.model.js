import db from '../utils/db.js';

export default{

    async findbyID(id){
        const list = await db('course').where('ID_COURSE',id);

        if(list.length === 0){

            return null;
        }


        return list[0];


    }



}
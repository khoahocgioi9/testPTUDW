import db from '../utils/db.js';
export default{
    async findAllbyCourseID(id){
        const list =  await db('user_course').where('ID_COURSE',id);
        return list;


    },
    async findAllbyUserID(id){
        const list = await db('user_course').where('ID_USER',id);
        return list;
    },



}
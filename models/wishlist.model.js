import db from '../utils/db.js';
export default{
    async findAllbyUserID(id){
        const list = await db('wishlist').where('ID_USER',id);
        return list;
    },
    async findAllbyCourseID(id){
        const list = await db('wishlist').where('ID_COURSE',id);
        return list;
    },
    async findAllbyUserAndCourseID(id_user,id_course){
        const list = await db('wishlist').where('ID_USER',id_user).where('ID_COURSE',id_course);
        return list;
    },
    async del(id) {
        return await db('wishlist')
            .where('ID_WISHLIST',id)
            .del();
    },



}
import db from '../utils/db.js';

export default{
   async findTop(id,id_course){
        const list = await db('course').where('ID_CATE',id)
            .whereNot('ID_COURSE',id_course)
            .orderBy('STUNUM', 'desc')

       if(list.length === 0){

            return null;
        }
        if(list.length <=5){
            //console.log(list.length)
           // console.log(list[0])
            return list;
        }
        const lists = [];
        lists.push(list[0])
        lists.push(list[1])
        lists.push(list[2])
        lists.push(list[3])
        lists.push(list[4])

        return lists;

    }


}
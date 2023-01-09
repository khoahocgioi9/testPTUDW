import express from 'express';
import { engine } from 'express-handlebars';
import hbs_sections from 'express-handlebars-sections'


import courseUserRoute from './routes/course-user.route.js';
import accountUserRoute from './routes/account-user.route.js';
import wishlistRoute from './routes/wishlist.route.js';
import myCourseRoute from './routes/mycourse.route.js';




import numeral from 'numeral';


const app = express();

import numeral from 'numeral';

import categoryService from '../services/category.service.js';
import fieldService from '../services/field.service.js';
import courseService from '../services/course.service.js';
import chapterService from '../services/chapter.service.js';
import lessonService from '../services/lesson.service.js';
import multer from 'multer';
import moment from 'moment';


const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use('/public', express.static('public'));
app.use(express.urlencoded({extended:true}));

app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main',
  helpers: {
    section: hbs_sections(),
    format_number(val) {
      return numeral(val).format('0,0');
    },
  }

}));
app.set('view engine', 'hbs');
app.set('views', './views');



app.use(async function (req, res, next) {
    if (typeof req.session.auth === 'undefined') {
      req.session.auth = false;
    }

    res.locals.auth = req.session.auth;
    res.locals.authUser = req.session.authUser;
    next();
  });

 app.use(async function (req, res, next) {
  let list = [];

  let fields = await fieldService.findAll();
  if (fields != null) {
    const promises = fields.map(async (field) => {
      const cat = await catService.findAllByFieldId(field.ID_FIELD);
      return cat;
    });

    const catsArr = await Promise.all(promises);

    let i = 0;
    fields.forEach((field) => {
      let temp = {
        field: field,
        categories: catsArr[i],
      };
      list.push(temp);
      i++;
    });
  }

  res.locals.lcField_Categories = list;

  next();
});
 

app.get('/', function (req, res) {
    // res.send('Hello World.');
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about');
})



app.use('/category/course',courseUserRoute);
app.use('/account',accountUserRoute);
app.use('/account/wishlist',wishlistRoute);
app.use('/account/mycourse',myCourseRoute);


app.use(function (req, res, next) {
    res.render('404', { layout: false });
});

app.use(function (err, req, res, next) {
    // console.error(err.stack);
    res.status(500).render('500', {
        stack: err.stack,
        layout: false
    });
});


const PORT = 3000;
app.listen(PORT, function () {
    console.log(`E-commerce application listening at http://localhost:${PORT}`);
})

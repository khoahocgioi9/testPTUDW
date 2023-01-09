import {engine} from 'express-handlebars';
import numeral from 'numeral';
import hbs_sections from 'express-handlebars-sections';

export default function (app) {
    app.engine(
        'hbs', engine({
           // defaultLayout: "main",
            extname: ".hbs",
            helpers: {
                section: hbs_sections(),
                format_number(val) {
                    return numeral(val).format_number("0,0");
                },
            },
        })
    ); //thay doi dinh dang duoi file main layout
    app.set("view engine", "hbs");
};
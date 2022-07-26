require('dotenv').config();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = require('./server/server');
const router = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(router);

// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3000;
const app = express();  

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Set Handlebars.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burger_controller');

app.use(routes);

app.listen(PORT, () => console.log(`App now listening at localhost:${PORT}`));
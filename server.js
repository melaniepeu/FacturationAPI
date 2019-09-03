const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Port de l'app
port = process.env.PORT || 3000;
app.listen(port);

console.log('Invoice tool RESTful API server started on: ' + port);

//Import des routes
const router = require('./app/routes/appRoutes');
const supplierRouter = require('./app/routes/appRoutes');
const invoiceRouter = require('./app/routes/appRoutes');

app.use('/api/v1/', router);
app.use('/api/v1/suppliers', supplierRouter);
app.use('/api/v1/invoices', invoiceRouter);

module.exports = app;

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const router =
    "API de facturation Trecobat /o/ <br> Fournisseurs : /v1/suppliers <br> Facturesv: /v1/invoices <br>";
  res.send(router);
}); 

module.exports = router;


//Routes Factures


const invoiceRouter = express.Router();

const Invoice = require('../controllers/InvoiceController.js');

invoiceRouter.get('/', async (req, res) => {
  try {
    let result = await Invoice.findAllInvoices();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.get('/:id', async (req, res) => {
  try {
    let result = await Invoice.findOneInvoice(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.get('/supplier/:id', async (req, res) => {
  try {
    let result = await Invoice.findAllInvoicesWithSupplierId(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.post('/', async (req, res) => {
  try {
    const invoice = req.body;
    let result = await Invoice.newInvoice(invoice);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.put('/:id', async (req, res) => {
  try {
    const invoice = req.body;
    let result = await Invoice.updateInvoice(invoice, req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.delete('/:id', async (req, res) => {
  try {
    let result = await Invoice.deleteInvoice(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = invoiceRouter;



// Routes Fournisseurs


const supplierRouter = express.Router();

const Supplier = require('../controllers/SupplierController');

supplierRouter.get('/', async (req, res) => {
  try {
    let result = await Supplier.findAllSuppliers();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

supplierRouter.get('/:id', async (req, res) => {
  try {
    let result = await Supplier.findOneSupplier(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

supplierRouter.post('/', async (req, res) => {
  try {
    const supplier = req.body;
    let result = await Supplier.newSupplier(supplier);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

supplierRouter.put('/:id', async (req, res) => {
  try {
    const supplier = req.body;
    let result = await Supplier.updateSupplier(supplier, req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

supplierRouter.delete('/:id', async (req, res) => {
  try {
    let result = await Supplier.deleteSupplier(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = supplierRouter;
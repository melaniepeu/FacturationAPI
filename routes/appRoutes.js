
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const router =
    "API de facturation Trecobat <br> Fournisseurs : /v1/suppliers <br> Factures: /v1/invoices <br>";
  res.send(router);
}); 

module.exports = router;
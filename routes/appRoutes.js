
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const router =
    "API de facturation Trecobat /o/ <br> Fournisseurs : /v1/suppliers <br> Facturesv: /v1/invoices <br>";
  res.send(router);
}); 

module.exports = router;
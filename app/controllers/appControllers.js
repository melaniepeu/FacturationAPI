const connection = require('../db');



//Requêtes sur la table Facture

let Invoice = {};

//Query sur la table Facture pour récupérer toutes les facture (avec une jointure pour récupérer le nom du fournisseur)
Invoice.findAllInvoices = () => {
  return new Promise((resolve, reject) => {
    const query =
      'SELECT i.*, s.company FROM invoice i, supplier s WHERE i.supplier_id = s.id';
      connection.query(query, (err, res) => {
      if (err) reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table Facture pour récupérer une facture avec un paramètre id (avec jointure).
Invoice.findOneInvoice = id => {
  return new Promise((resolve, reject) => {
    const query =
      'SELECT i.*, s.company  FROM invoice i, supplier s WHERE i.id = ?';
      connection.query(query, [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table Facture pour récupérer les factures d'un fournisseur avec un paramètre id.
Invoice.findAllInvoicesWithSupplierId = id => {
  return new Promise((resolve, reject) => {
    const query =
      'SELECT i.*, s.company FROM invoice i, supplier s WHERE i.supplier_id = s.id AND i.supplier_id = ?';
      connection.query(query, [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table Facture pour créer une facture.
Invoice.newInvoice = invoice => {
  return new Promise((resolve, reject) => {
    const params = [
      invoice.invoice_num,
      invoice.date,
      invoice.command_num,
      invoice.price_notax,
      invoice.tax,
      invoice.status,
      invoice.supplier_id,
    ];
    const query =
      'INSERT INTO invoice (invoice_num, date, command_num, price_notax, tax, status, supplier_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
      connection.query(query, params, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

//Query sur la table Facture pour mettre à jour une facture avec un paramètre id.
Invoice.updateInvoice = (invoice, id) => {
  return new Promise((resolve, reject) => {
    const params = [
      invoice.invoice_num,
      invoice.date,
      invoice.command_num,
      invoice.price_notax,
      invoice.tax,
      invoice.status,
      invoice.supplier_id,
      id,
    ];
    const query =
      'UPDATE invoice SET invoice_num = ?, date = ?, command_num = ?, price_notax = ?, tax = ?, status = ?, supplier_id = ? WHERE id = ?';
      connection.query(query, params, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

//Query sur la table Facture pour supprimer une facture avec un paramètre id.
Invoice.deleteInvoice = id => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM invoice WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

module.exports = Invoice;



//Requêtes sur la table Fournisseur

const Supplier = {};

//Query sur la table Fournisseur pour récupérer tous les fournisseurs.
Supplier.findAllSuppliers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM supplier', (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table Fournisseur pour récupérer un fournisseur avec un paramètre id.
Supplier.findOneSupplier = id => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM supplier WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res[0]);
    });
  });
};

//Query sur la table Fournisseur pour créer un fournisseur.
Supplier.newSupplier = supplier => {
  return new Promise((resolve, reject) => {
    const params = [
      supplier.company,
      supplier.adress,
      supplier.postcode,
      supplier.city,
      supplier.country,
      supplier.phone,
      supplier.iban,
      supplier.account,
      supplier.category,
    ];
    const query =
      'INSERT INTO supplier (company, adress, postcode, city, country, phone, iban, account, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
      connection.query(query, params, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

//Query sur la table Fournisseur pour mettre à jour un fournisseur avec un paramètre id.
Supplier.updateSupplier = (supplier, id) => {
  return new Promise((resolve, reject) => {
    const params = [
      supplier.company,
      supplier.adress,
      supplier.postcode,
      supplier.city,
      supplier.country,
      supplier.phone,
      supplier.iban,
      supplier.account,
      supplier.category,
      id,
    ];
    const query =
      'UPDATE supplier SET company = ?, adress = ?, postcode = ?, city = ?, country = ?, phone = ?, iban = ?, account = ?, category = ? WHERE id = ?';
      connection.query(query, params, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

//Query sur la table Fournisseur pour supprimer un fournisseur avec un paramètre id.
Supplier.deleteSupplier = id => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM supplier WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

module.exports = Supplier;
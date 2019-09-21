const connection = require('../db');

/*les requetes sur la table des factures*/
let Invoice = {};

/* requete pour la creation d'une facture */
Invoice.newInvoice = () => {
    return new Promise((resolve, reject) => {
        const params = [
            invoice.date_invoice,
            invoice.price_invoice,
            invoice.tax_invoice,
            invoice.status_invoice,
            invoice.id,
            id,
        ];
        const query = 'INSERT INTO invoice (date_invoice, price_invoice, tax_invoice, status_invoice, id) VALUES (?, ?, ?, ?, ?)';
        connection.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* requete pour obtenir la liste complète de la table facture */
Invoice.findAllInvoices = () => {
    return new Promise((resolve, reject) => {
        connection.query('Select * From invoice', (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};

/* requete pour récuperer une facture spécifique grâce à un id*/
Invoice.findOneInvoice = id => {
    return new Promise((resolve, reject) => {
        connection.query('Select * From invoice Where id = ?', [id], (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};
/* requete pour la modification d'une facture */
Invoice.updateInvoice = () => {
    return new Promise((resolve, reject) => {
        const params = [
            invoice.date_invoice,
            invoice.price_invoice,
            invoice.tax_invoice,
            invoice.status_invoice,
            invoice.id,
            id,
        ];
        'UPDATE invoice SET date_invoice = ?, price_invoice = ?, tax_invoice = ?, status_invoice = ?, id = ?, WHERE id = ?';
        connection.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* requete pour la suppression d'une facture*/
Invoice.deleteInvoice = id => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM facture WHERE id = ?', [id], (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

module.exports = Invoice;
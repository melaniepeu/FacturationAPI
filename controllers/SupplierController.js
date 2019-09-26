const connection = require('../db');

/*la requete sur la table des fournisseur*/
let Supplier = {};

/* requete pour obtenir la liste complète de la table fournisseur */
Supplier.findAllSuppliers = () => {
    return new Promise((resolve, reject) => {
        connection.query('Select * From supplier', (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};


/* requete pour récuperer une fournisseur spécifique grâce à un id*/
Supplier.findOneSupplier = id => {
    return new Promise((resolve, reject) => {
        connection.query('Select * From supplier Where id = ?', [id], (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};

/* requete pour la creation d'une fournisseur */
Supplier.newSupplier = (supplier) => {
    return new Promise((resolve, reject) => {
        const params = [
            supplier.nom_supplier,
            supplier.adress_supplier,
            supplier.pc_supplier,
            supplier.city_supplier,
            supplier.country_supplier,
            supplier.phone_supplier,
            supplier.iban_supplier,
        ];
        const query = 'INSERT INTO supplier (nom_supplier, adress_supplier, pc_supplier, city_supplier, country_supplier, phone_supplier, iban_supplier) VALUES (?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* requete pour la modification d'un fournisseur */
Supplier.updateSupplier = (supplier, id) => {
    return new Promise((resolve, reject) => {
        const params = [
            supplier.nom_supplier,
            supplier.adress_supplier,
            supplier.pc_supplier,
            supplier.city_supplier,
            supplier.country_supplier,
            supplier.phone_supplier,
            supplier.iban_supplier,
            id,
        ];
        'UPDATE supplier SET nom_supplier = ?, adress_supplier = ?, pc_supplier = ?, city_supplier = ?, country_supplier = ?, phone_supplier = ?, iban_supplier = ? WHERE id = ?';
        connection.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* requete pour la suppression d'un fournisseur*/
Supplier.deleteSupplier = id => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM supplier WHERE id = ?', [id], (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};
module.exports = Supplier;
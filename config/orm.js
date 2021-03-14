const connection = require('./connection.js');

const orm = {
    selectAll(table){
        const queryString = `SELECT * FROM ??`;
        connection.query(
            queryString,
            [table],
            (err, result) => {
              if (err) throw err;
            }
          );
    },

    insertOne(whatToSelect, table, column, searchValue){
        const queryString = `SELECT ?? FROM ?? WHERE ?? = ?`
        connection.query(
            queryString,
            [whatToSelect, table, column, searchValue],
            (err, result) => {
              if (err) throw err;
            }
          );
    },

    updateOne(setCol, setValue, searchCol, idValue){
        const queryString = `UPDATE ?? SET ?? WHERE ?? = ?`
        connection.query(
            queryString,
            [setCol, setValue, searchCol, idValue],
            (err, result) => {
              if (err) throw err;
            }
          );
    }
}

module.exports = orm;
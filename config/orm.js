const connection = require('./connection.js');

const orm = {
    selectAll(table, cb){
        const queryString = `SELECT * FROM ??`;
        connection.query(
            queryString,
            [table],
            (err, result) => {
              if (err) throw err;
              cb(result);
            }
          );
    },

    selectWhere(table, column, searchValue, cb){
        const queryString = `SELECT * FROM ?? WHERE ?? = ?`
        connection.query(
            queryString,
            [table, column, searchValue],
            (err, result) => {
              if (err) throw err;
              cb(result);
            }
          );
    },

    insertOne(table, columnToInsert, insertValue, cb){
      const queryString = `INSERT INTO ?? (??) VALUES (?)`
      connection.query(
          queryString,
          [table, columnToInsert, insertValue],
          (err, result) => {
            if (err) throw err;
            cb(result);
          }
        );
    },

    updateOne(table, setCol, setColNewValue, conditionCol, conditionVal, cb){
        const queryString = `UPDATE ?? SET ?? = ? WHERE ?? = ?`
        connection.query(
            queryString,
            [table, setCol, setColNewValue, conditionCol, conditionVal],
            (err, result) => {
              if (err) throw err;
              cb(result);
            }
          );
    }
}

module.exports = orm;
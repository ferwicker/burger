const orm = require('../config/orm');

// cb refers to a call back function
const burger = {
    getAll(cb){
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertBurger(newBurgerName, cb){
        orm.insertOne('burgers', 'burger_name', newBurgerName, (res) => cb(res));
    },
    updateDevoured(burgerId, devouredValue, cb){
        orm.updateOne('burgers', 'devoured', devouredValue, 'id', burgerId, (res) => cb(res));
    },
    selectBurgers(devouredValue, cb){
        orm.selectWhere('burgers', 'devoured', devouredValue, (res) => cb(res))
    }
}

module.exports = burger;
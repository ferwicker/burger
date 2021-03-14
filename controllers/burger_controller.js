const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req,res) => {
    burger.getAll((data) => {
        const burgersObject = {
            burgers: data,
        };
        res.render('index', burgersObject); //display all burgers in the handlebars index
    });
});

router.post('/api/burgers', (req,res) => {
    burger.insertBurger(req.body.burgername, (result) => {
        console.log(`New Burger added: ${result}`);
    });
});

router.put('/api/burgers/:id', (req,res) => {
    burger.updateDevoured(req.params.id, req.body.devoured, (result) => {
        console.log(result);
    })
})

module.exports = router;
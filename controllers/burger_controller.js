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
    burger.insertBurger(req.body.burger_name, (result) => {
        res.status(200).end();
    });
});

router.put('/api/burgers/:id', (req,res) => {
    burger.updateDevoured(req.params.id, req.body.devoured, (result) => {
        if (result.changedRows === 0) {
            // check if anything was changed, and create the response to return to front end
            return res.status(404).end();
        }
        res.status(200).end();    
        console.log(result);
    })
})

module.exports = router;
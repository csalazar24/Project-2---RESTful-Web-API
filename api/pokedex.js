const Student = require('./models/pokemon');
const router = require('express').Router();
 
// Get all pokemons
// http://localhost:8000/api/pokedex/
router.get("/", function(req, res) {
    Pokemon.find(function(err, pokemons) {
       if (err) {
          res.status(400).send(err);
       }
       else {
          res.json(pokemons);
       }
    });
 });

  // Get pokemon with given ID
// http://localhost:8000/api/pokedex/001
router.get('/:id', function(req, res) {
    console.log('id = ' + req.params.id);//_id?
    Pokemon.findById(req.params.id, function(err, poke) {
        if (err) {
            res.status(400).send(err);
        }
        else if (poke) {
            res.json(poke);
        }
        else {
            res.sendStatus(404);
        }
    });
});

  // Get pokemon with given name
// http://localhost:8000/api/pokedex/Charmander
router.get('/:name', function(req, res) {
    console.log('name = ' + req.params.name);
    Pokemon.findById(req.params.id, function(err, poke) {
        if (err) {
            res.status(400).send(err);
        }
        else if (poke) {
            res.json(poke);
        }
        else {
            res.sendStatus(404);
        }
    });
});
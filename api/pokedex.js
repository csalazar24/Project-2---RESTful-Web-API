const Pokemon = require('../models/pokemon');
const router = require('express').Router();


// Get resources by criteria
// http://localhost:8000/api/pokedex/Charmander
router.get('/', function(req, res) {
    let query = {};
     
     if (req.query.name) {
        query = { name: req.query.name };
     }
 
     Pokemon.find(query, function(err, poke) {
        if (err) {
           res.status(400).send(err);
       } 
       else {
           res.json(poke);
        }
    });
});
 
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
// http://localhost:8000/api/pokedex/60666d9f72360717c8bd0fea
 router.get('/:id', function(req, res) {
    console.log('id = ' + req.params.id);
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
// http://localhost:8000/api/pokedex/xxxx/Charmander
// router.get('/:name', function(req, res) {
//  console.log('name = ' + req.params.name);
//   Pokemon.find(req.params.name, function(err, poke) {
//       if (err) {
//           res.status(400).send(err);
//       }
//       else if (poke) {
//           res.json(poke);
//       }
//       else {
//          res.sendStatus(404);
//      }
//   });
// });



 //Add new Pokemon to Pokedex
router.post('/', function(req, res) {
    const pokemon = new Pokemon({
        no: req.body.no,
        name: req.body.name,
        species: req.body.species,
        height: req.body.height,
        weight: req.body.weight,
        type: req.body.type,
      
    });

    pokemon.save(function(err, stu) {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(201).json(stu);
        }
    });
});

//Update Pokemon
router.put('/:id', function(req, res) {
    Pokemon.updateOne({ _id: req.params.id }, req.body, function(err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else if (result.n === 0) {
            res.status(404).json({ message: 'Pokemon not found' });
        }
        else {
            res.sendStatus(204);
        }
    });
});

//Delete Pokemon from Pokedex
router.delete('/:id', function(req, res) { 
    Pokemon.deleteOne({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.status(400).send(err);
        }
        else if (result.n === 0) {
            res.status(404).json({ message: 'Pokemon not found' });
        }
        else {
            res.sendStatus(204);
        }
    });
});

module.exports = router;
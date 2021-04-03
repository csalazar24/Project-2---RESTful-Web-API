const Pokemon = require('../models/pokemon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();
chai.use(chaiHttp);

describe('Pokedex API', () => {

    beforeEach(async () => {
        await Pokemon.deleteMany({});

        testDocs.length = 0;

        for (const pkmn of testPkmn) {
            const pokemon = new Pokemon(pkmn);
            const pkmnDoc = await pokemon.save();
            testDocs.push(stuDoc);
        } 

    });

    const testDocs = [];

    const testPkmn = [
        {
            no:         25,
            name:       'Pikachu',
            species:    'Mouse Pokemon',
            height:     0.4,
            weight:     0.6,
            type:       ['Electric']
        },
        {
            no:         107,
            name:       'Hitmonchan',
            species:    'Punching Pokemon',
            height:     1.4,
            weight:     50.2,
            type:       ['Fighting']
        },
        {
            no:         475,
            name:       'Gallade',
            species:    'Blade Pokemon',
            height:     1.6,
            weight:     52.0,
            type:       ['Psychic', 'Fighting']
        },
    ];

    describe('GET /pokedex', () => {
        it('should get all existing pokemon', (done) => {
            chai.request(server)
                .get('/api/pokedex')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3);
                    done();
                });
        });
    });

    describe('GET /:id pokemon', () => {
        it('should get a pokemon by id', (done) => {
            const poke = testDocs[0];
            chai.request(server)
                .get('/api/pokedex/' + poke._id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('no').eql(poke.no);
                    res.body.should.have.property('name').eql(poke.name);
                    res.body.should.have.property('species').eql(poke.species);
                    res.body.should.have.property('height').eql(poke.height);
                    res.body.should.have.property('weight').eql(poke.weight);
                    res.body.should.have.property('type').eql(poke.type);
                    res.body.should.have.property('id').eql(poke.id.toString());
                    done();
                });
        });

        //it(400 status)
        it('should try to GET non-existent pokemon', (done) => {
            const poke = new Pokemon({
                no: 12345,
                name: 'Fake',
                species: 'False Pokemon',
                height: 250,
                weight: 0.5,
                type: ['Ghost']
            });
            chai.request(server)
                .get('/api/pokedex/' + poke.id)
                .end((err, res) => {
                    res.should.have.status(404); 
                })
        });
    });	

   

    describe('POST /pokedex', () => {
        it('should create a new pokemon', (done) => {            
            chai.request(server)
                .post('/api/pokedex')
                .send(testPkmn[0])
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('no')
                    res.body.should.have.property('name')
                    res.body.should.have.property('species')
                    res.body.should.have.property('height')
                    res.body.should.have.property('weight')
                    res.body.should.have.property('type')
                    res.body.should.have.property('id')
                    done();
                });
        });

        //it(400 status)
    });	

   

    describe('PUT /pokedex/:id', () => {
        it('should update a pokemon', (done) => { 
            const poke = testPkmn[0];
            poke.no = 0;
            poke.name = 'Temp name';
            poke.species = 'Temp Species';
            poke.height = 0;
            poke.weight = 0;
            poke.type = ['Testing software'];
            

            chai.request(server)
                .put('/api/pokedex/' + testDocs[0].id)
                .send(poke)
                .end((err, res) => {
                    res.should.have.status(204);
                    
                    chai.request(server)
                        .get('/api/pokedex/' + testDocs[0].id)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.have.property('no').eql(poke.no);
                            res.body.should.have.property('name').eql(poke.name);
                            res.body.should.have.property('species').eql(poke.species);
                            res.body.should.have.property('height').eql(poke.height);
                            res.body.should.have.property('weight').eql(poke.weight);
                            res.body.should.have.property('type').eql(poke.type);
                            res.body.should.have.property('id').eql(poke.id.toString());;
                            done();
                        });
                });
        });

        //it(404 status)

    });

    describe('DELETE /pokedex/:id', () => {
        it('should delete a pokemon', (done) => { 
            const poke = testDocs[0];

            chai.request(server)
                .delete('/api/pokedex/' + poke.id)
                .end((err, res) => {
                    res.should.have.status(204);
                    
                    chai.request(server)
                        .get('/api/pokedex/' + poke.id)
                        .end((err, res) => {
                            res.should.have.status(404);
                            done();
                        });
                });
        });

        //it(404 status)
    });











});
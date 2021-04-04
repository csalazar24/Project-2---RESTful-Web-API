# Project-2---RESTful-Web-API

## Authors
Sargent Erwin and Christopher Salazar

## Description
 We will have a pokemon Database with a no, name, species, height, weight, and type as an array
 
 ## Routes available
 
|  Resource |  Request verb | Description  | Status Code  |
|---|---|---|---|
|  http://localhost:8000/api/pokedex/ |  GET |  Get a list of all pokemons | 200 OK  |
| http://localhost:8000/api/pokedex/60666d9f72360717c8bd0fea  | GET  | Get pokemon by ID  |  200 OK |
|  http://localhost:8000/api/pokedex?name=Bulbasaur |  GET |  Get pokemon by name |  200 OK |
| http://localhost:8000/api/pokedex?name=Hello  | GET  | Get non-existing pokemon with name Hello  |  404 Not Found | 
|  http://localhost:8000/api/pokedex/ |  POST | Create a new pokemon  | 	201 Created  | 
|  http://localhost:8000/api/pokedex/60666d9f72360717c8bd0fea |  PUT | Update pokemon with ID 60666d9f72360717c8bd0fea  |  204 No Content |
| http://localhost:8000/api/pokedex/60666d9f72360717c8bd0fea  |  DELETE | Delete pokemon with ID 60666d9f72360717c8bd0fea  | 204 No Content  |

## Distribution of Work
   
Sargent: 50~%
Christopher: 50~%

Proper project configuration:| Christopher & Sargent (Pair programming)

Document criteria: Christopher & Sargent (Pair programming)

GET all resources: Christopher

GET resource by ID: Christopher

GET resource by other criteria: Christopher

POST resource: Sargent

PUT resource: Sargent

DELETE resource: Sargent

Web page for interacting with API: Christopher & Sargent (Pair programming)

Mocha/Chai tests: Christopher & Sargent (Pair programming)

GitHub usage: Christopher

Coding best practices: Christopher & Sargent (Pair programming)


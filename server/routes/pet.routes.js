const PetController = require('../controllers/pet.controllers')
module.exports = function(app) {
    app.get('/api', PetController.index);
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pets/:id', PetController.findOnePet);
    app.post('/api/pets', PetController.create);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.delete)
}
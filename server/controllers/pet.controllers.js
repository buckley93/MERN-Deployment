const Pet = require('../models/pet.model');

module.exports.index = (req, res) => {
    res.json ({
        message: "Hello World"
    })
}

module.exports.create = (req, res) => {
    const { name, type, description, skills1, skills2, skills3} = req.body;
    Pet.create({
        name,
        type,
        description,
        skills1,
        skills2,
        skills3
    })
        .then(pet => {
            console.log(pet),
            res.json(pet)
        })
        .catch((err) => {
            console.log("error in your create controller"),
            res.status(400).json(err)
        })
}

module.exports.findAllPets = (req, res) => {
    Pet.find({})
        .sort({ type: 1 })
        .then(pets => {
            res.json(pets)
        })
        .catch((err) => {
            console.log("error in your findAllPets controller")
            res.status(400).json(err)
        })
}

module.exports.findOnePet = (req, res) => {
    Pet.findById({_id: req.params.id})
        .then(pet => {
            console.log(pet),
            res.json(pet)
        })
        .catch((err) => {
            console.log("error in your findOnePet controller"),
            res.status(400).json(err)
        })
}

module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true
    })
        .then(updatedPet => {
            console.log(updatedPet),
            res.json(updatedPet)
        }) 
        .catch((err) => {
            console.log("error in your updatePet controller"),
            res.status(400).json(err)
        })
}

module.exports.delete = (req, res) => {
    Pet.findByIdAndDelete({_id: req.params.id})
        .then(deletedPet => {
            console.log(deletedPet),
            res.json(deletedPet)
        })
        .catch((err) => {
            console.log("error in your delete controller"),
            res.status(400).json(err)
        })
}
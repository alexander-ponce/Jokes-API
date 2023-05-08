const Joke = require('../models/jokes.model');

module.exports = {

    // CRUD all in one

    // create
    createNewJoke: (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.status(400).json(err));
    },

     // Read (all)
    findAllJokes: (req, res) => {
        Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err));
    },

    // Read (one)
    findOneSingleJoke: (req, res) => {
        Joke.findById(req.params.id)
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err))
    },

    // update, new is true is going to give the updated value/document, run validators as true means that before we update it will go into our model and say okay, if its in our database we know it passed validations but we want to make sure they're not updating to something that doesn't pass validations, this is having it run validators again. if they are valid then. works with put and patch
    updateExistingJoke: (req, res) => {
        Joke.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json(err))
    },


    // delete
    deleteAnExistingJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },

    // Random
    showRandomJoke: (req, res) => {
        Joke.aggregate([{ $sample: { size: 1 }}])
        .then(randomJoke => res.json(randomJoke[0]))
        .catch(err => res.json(err))
    } 
}



//altternative way of setting controller with more code

// module.exports.findAllJokes = (req, res) => {
//     // ...retrieve an array of all documents in the Joke collection
//     Joke.find()
//         .then((allDaJokes) => {
//             // logic with Jokes results
//             res.json({ Jokes: allDaJokes })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });
// }
 
// module.exports.findOneSingleJoke = (req, res) => {
//     // ...retrieve 1 document (the first record found) matching the query object criteria
//     Joke.findOne({ _id: req.params.id })
//         .then(oneSingleJoke => {
//             res.json({ Joke: oneSingleJoke })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}

//     // ...create a new document to store in the Joke collection and save it to the DB.
// module.exports.createNewJoke = (req, res) => {
//     Joke.create(req.body)
//         .then(newlyCreatedJoke => {
//             // logic with succesfully saved newJoke object
//             res.json({ Joke: newlyCreatedJoke })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//             // If there's an error and the record was not saved, this (err) will contain validation errors.
//         });}
 
// module.exports.updateExistingJoke = (req, res) => {
//     // ...update 1 document that matches the query object criteria
//     Joke.findOneAndUpdate(
//         { _id: req.params.id },
//         req.body,
//         { new: true, runValidators: true }
//     )
//         .then(updatedJoke => {
//             // logic with result -- note this will be the original object by default!
//             res.json({ Joke: updatedJoke })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}
 
// module.exports.deleteAnExistingJoke = (req, res) => {
//     // ...delete 1 document that matches the query object criteria
//     Joke.deleteOne({ _id: req.params.id })
//         .then(result => {
//             res.json({ result: result })
//              // logic (if any) with successfully removed deletedJoke object
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}

// module.exports.showRandomJoke = (req, res) => {
//     // ...delete 1 document that matches the query object criteria
//     Joke.aggregate([{$sample: {size:1} }])
//         .then(result => {
//             res.json({ result: result })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}

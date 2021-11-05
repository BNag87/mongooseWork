//this file contains functions/methods for the movie model
const Movie = require("./movie.model")
const mongoose = require("mongoose")

exports.addMovie = async (movieObj) => {
    try {
        //this creates a new movie, based on rules set in movie.model.js
            const movie = new Movie(movieObj);
            await movie.save();
            console.log("movie.save() was fired");
            mongoose.disconnect();
            console.log("mongoose.disconnect() was fired");
            console.log("Movie successfully added to DB, through mongoose");
    }
    catch(error){
        console.log("Some shit went wrong in 'addMovie' in 'movie.methods.js':\n"+error)
    }
}

exports.barkMovies = async () => {
    try {
        //this gets all records and prints them out from the db
            console.log("----→\tAssigning database data to readMovies...")    
            const readMovies = await Movie.find({})
            console.log("----→\treadMovies was assigned: "+readMovies)
            
            mongoose.disconnect();
            console.log("----→\tmongoose.disconnect was fired");
    }
    catch(error){
        console.log("Some shit went wrong in 'barkMovies' located in 'movie.methods.js':\n"+error)
    }
}

exports.deleteMovies = async () => {
    try {
        //this gets deletes all records from the database
            console.log("----→\tPurging all movies...")    
            await Movie.remove({})
            console.log("----→\tMovie.remove was fired")
            
            mongoose.disconnect();
            console.log("----→\tmongoose.disconnect was fired");
    }
    catch(error){
        console.log("Some shit went wrong in 'barkMovies' located in 'movie.methods.js':\n"+error)
    }
}

//PROBLEMS START HERE! I think the issue is with passing two variables rather than a single movieObj. Maybe?
//In my edits over the weekend, I'll try and use that to edit a file.
//Thanks!
exports.edit = async (titleIn, actorIn) => {
    try {
        //this gets deletes all records from the database
            
            // console.log("----→\tEditing movie '"+movieObj.title+"' to have the actor "+movieObj.actor+" as the actor.")
            const movie = await Movie.updateOne({title: titleIn, actor: actorIn})

            //                 console.log("----→\tMovie "+movieObj.title+" was updated to have the actor "+movieObj.title+".")
            // console.log("movie was set as: ",movieObj.title)

            mongoose.disconnect();
            console.log("----→\tmongoose.disconnect was fired");
    }
    catch(error){
        console.log("Some shit went wrong in 'edit' located in 'movie.methods.js':\n"+error)
    }
}
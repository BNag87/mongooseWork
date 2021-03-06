//get the db connection
require("./db/connection.js");
const yargs = require("yargs");
const {addMovie, barkMovies, deleteMovies, edit} = require("./movie/movie.methods")

const app = () => {
    
    if (process.argv[2] === "add"){
        try{
        console.log("----→\tFiring addMovie...")
        addMovie({title: yargs.argv.title, actor: yargs.argv.actor})
        }
        catch (error){
            console.log("A nappy change is needed in the 'addMovie' function in 'app.js': \n\t"+error)
        }
    }

    else if(process.argv[2] === "barkMovies"){
        try{
        console.log("----→\tFiring barkMovie...")
        console.log("PROCESS ARGV WAS: ",process.argv)
        barkMovies()
        }
        catch (error){
            console.log("Whoops... shite hit the fan in the 'barkMovies' function in 'app.js': \n\t"+error)
        }
    }

    else if(process.argv[2] === "deleteAll"){
        try{
            console.log("----→\tFiring deleteMovies (purges all movies)...")
            deleteMovies()
        }
        catch (error){
            console.log("There was an unexpected bowel movement in the 'deleteMovies' function in 'app.js': \n\t"+error)
        }

    }

    else if(process.argv[2] === "edit"){
        try{
            console.log("=========================\n", "yargs.argv.title = ", yargs.argv.title,"\n")
            console.log("=========================\n", "yargs.argv.actor = ", yargs.argv.actor,"\n")
            console.log("----→Firing edit...")

            console.log("From the app.js, passing yargs to edit...")
            edit(yargs.argv.title, yargs.argv.actor)
            console.log("From the app.js, managed to pass yargs and do the function!")
            
        } 
        catch (error){
            console.log("Whoops... something shat itself in the 'edit' function in 'app.js': \n\t"+error)
        }
        
    }

    else{
        console.log("Command not recognised. Please run one of the following commands:\n\t'add' --title='TitleName' actor='ActorName\n\t'barkMovies'\n\t'deleteAll'\n\t'edit' --title='TitleToSearch' --actor='ActorToUpdate'\n")
    }
}

app()
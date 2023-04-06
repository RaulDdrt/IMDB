import { Movie } from "./movie";
import { Professional } from "./professional";
import { IMDB } from "./IMDB";

let peli1 = new Movie("American Pie", 1999, "estadounidense", "comedia")
let director1 = new Professional("Paul Weitz", 57, 90, 1.80, false, "estadounidense", 0, "director")
let actor1 = new Professional("Jason Biggs", 44, 79, 1.91, false, "estadounidense", 0, "actor")
let actor2 = new Professional("Alyson Hannigan", 49, 60, 1.63, false, "estadounidense", 0, "actriz")
peli1.director = director1
peli1.actors = [actor1, actor2]
peli1.writer = director1

let peli2 = new Movie("Alien", 1979, "Estado Unidense", "Terror")
let prof1 = new Professional ("Ridley Scott", 85, 1.74, 80, false, "Inglesa", 1, "Director")
let prof2 = new Professional("Sigourney Weaver", 73, 60, 1.75, false, "estadounidense", 0, "actriz")
let prof3 = new Professional("Tom Skerrit", 89, 90, 1.80, true, "estadounidense", 0, "actor")
peli2.actors = [prof2, prof3]
peli2.director = prof1
peli2.writer = prof1
peli2.isMCU = false
peli2.language = "inglés"
peli2.mainCharacterName = "Ripley"

let arrayPelis = [peli1, peli2]

let imbd = new IMDB(arrayPelis)

imbd.showIMDB()
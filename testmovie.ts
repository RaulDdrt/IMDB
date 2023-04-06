import { Movie } from "./movie";
import { Professional } from "./professional";

let lapeli = new Movie("Alien", 1979, "Estado Unidense", "Terror")
let prof1 = new Professional ("Ridley Scott", 85, 1.74, 80, false, "Inglesa", 1, "Director")
let prof2 = new Professional("Sigourney Weaver", 73, 60, 1.75, false, "estadounidense", 0, "actriz")
let prof3 = new Professional("Tom Skerrit", 89, 90, 1.80, true, "estadounidense", 0, "actor")
lapeli.actors = [prof2, prof3]
lapeli.director = prof1
lapeli.writer = prof1
lapeli.isMCU = false
lapeli.language = "inglés"
lapeli.mainCharacterName = "Ripley"
lapeli.showAllMovie()


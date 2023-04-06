import { Movie } from "./movie";
import { Professional } from "./professional"

export class IMDB{

    public peliculas: Movie[]

    constructor (peliculas:Movie[]){

        this.peliculas = peliculas

    }

    showIMDB(){

        for ( let i = 0; i < this.peliculas.length; i++){

            this.peliculas[i].showAllMovie()

        }

    }

}
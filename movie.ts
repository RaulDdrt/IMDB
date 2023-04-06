import { Professional } from "./professional"

export class Movie{

    public title: string
    public releaseYear: number
    public actors: Professional[]
    public nacionality: string
    public director: Professional
    public writer: Professional
    public language: string
    public plataforma: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string

    constructor (title:string,releaseyear:number,nacionality:string,genre:string){

    this.title = title
    this.releaseYear = releaseyear
    this.nacionality = nacionality
    this.genre = genre

}

    showAllMovie(){

        console.log(this.title + "\n" + this.releaseYear + "\n")
        for(let i=0; i<this.actors.length; i++){
            this.actors[i].showAll()
        }
        console.log(this.nacionality + "\n")
        this.director.showAll()
        this.writer.showAll()
        console.log(this.language + "\n" + this.isMCU + "\n" + this.mainCharacterName + "\n" + this.producer + "\n" + this.distributor + "\n" + this.genre + "\n")

    }


}
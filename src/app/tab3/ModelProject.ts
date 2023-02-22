export class Project{

    title?:string;
    subTitle?:string;
    genders?:string;
    players?:number;
    images?:string;

    public constructor(title:string, subtitle:string, genders:string, players:number, images:string){

        this.title = title;
        this.subTitle = subtitle;
        this.genders = genders;
        this.players = players;
        this.images = images;

    }
}
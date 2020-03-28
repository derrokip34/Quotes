export class Quote {
    public showDetails: boolean;
    public countUp: number;
    public countDown: number;

    constructor(public name: string, public author: string, public poster: string, public datePosted: Date){

        this.showDetails=false
        this.countUp = 0
        this.countDown = 0
    }
}

interface GPS
{
    x:number;
    y:number;
    getCoordinates();
}

interface MediaPlayer
{
    start:boolean;
    stop:boolean;
    pause:boolean;
    getmode();

}
class SmartPhone implements GPS,MediaPlayer
{
    public x:number=34;
    public y:number=345;
    public start:boolean=true;
    public stop:boolean=false;
    public pause:boolean=false;
    public getCoordinates() {
        console.log(`X : ${this.x}, Y : ${this.y}`);
    }
    public getmode() {
        console.log(`Start : ${this.start}`);
    }
}
var obj=new SmartPhone();
obj.getCoordinates();
obj.getmode();

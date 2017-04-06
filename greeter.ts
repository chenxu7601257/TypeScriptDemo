//class
class Student{
    firstName:string;
    lastName:string;
     
     //构造器
    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    greeter(){
        return "Hello,"+this.firstName+" "+this.lastName;
    }
}

var user=new Student("chen","xu");
console.log(user.greeter());

//type
var flag:boolean=true;
var myStr:string='jacob cx';
var myArr:any[]=[1,2,3,'else'];

//enum
enum myConstants{
    pi=3.14,
    e=2.73,
    log2=0.3,
    log5=0.7
}

console.log(2*myConstants.pi);

//function name(params:type) 
//default arguments
function addNums(num1:any,num2:number=10):number{
    if(typeof(num1)=='string'){
        if(isNaN(parseInt(num1,10))){
            return 0;
        }
    }
    return num1*num2;
}
    
console.log(addNums(55,33));

function optionalFunction(x:number,y?:number){
    return x+y;
}

//function overloading
function areaOfQuad(x:number);
function areaOfQuad(x:number,y?:number);
function areaOfQuad(x:any,y?:any,z?:any){
    return x+y+z;
}


areaOfQuad(1);



//interface
interface myInterface{
    shape:string;
    side:string;
}
//interface use
function operate(x:myInterface){
    return x.shape+x.side;
}
 
var xx=operate({shape:'11',side:'22'});

//more on interface
interface player{
    run():void;
    addLives(n:number):void;
    score():number;
}

function createPlayer():player
{
    return {
        run:()=>{},
        addLives:()=>{},
        score:()=>{return 1}
    }
}

var player1=createPlayer();

//class
class website{
    url:string;
    facebookLikes:number;
    
    constructor(url:string,likes:number){
        this.url=url;
        this.facebookLikes=likes;
    }

    likeInk():number{
        return this.facebookLikes+100;
    }

    //getter
    get FacebookLikes(){
        return this.facebookLikes+100;
    }

    //setter
    set FacebookLikes(likes){
         this.facebookLikes=1000+likes;
    }
}

var google=new website('http://www.google.com.hk',12343);
google.url='http://www.google.com.hk';
google.facebookLikes=1234;
console.log(google.FacebookLikes);
google.FacebookLikes=1000;

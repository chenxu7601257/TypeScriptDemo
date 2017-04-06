//class
var Student = (function () {
    //构造器
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.greeter = function () {
        return "Hello," + this.firstName + " " + this.lastName;
    };
    return Student;
}());
var user = new Student("chen", "xu");
console.log(user.greeter());
//type
var flag = true;
var myStr = 'jacob cx';
var myArr = [1, 2, 3, 'else'];
//enum
var myConstants;
(function (myConstants) {
    myConstants[myConstants["pi"] = 3.14] = "pi";
    myConstants[myConstants["e"] = 2.73] = "e";
    myConstants[myConstants["log2"] = 0.3] = "log2";
    myConstants[myConstants["log5"] = 0.7] = "log5";
})(myConstants || (myConstants = {}));
console.log(2 * myConstants.pi);
//function name(params:type) 
//default arguments
function addNums(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (typeof (num1) == 'string') {
        if (isNaN(parseInt(num1, 10))) {
            return 0;
        }
    }
    return num1 * num2;
}
console.log(addNums(55, 33));
function optionalFunction(x, y) {
    return x + y;
}
function areaOfQuad(x, y, z) {
    return x + y + z;
}
areaOfQuad(1);
//interface use
function operate(x) {
    return x.shape + x.side;
}
var xx = operate({ shape: '11', side: '22' });
function createPlayer() {
    return {
        run: function () { },
        addLives: function () { },
        score: function () { return 1; }
    };
}
var player1 = createPlayer();
//class
var website = (function () {
    function website(url, likes) {
        this.url = url;
        this.facebookLikes = likes;
    }
    website.prototype.likeInk = function () {
        return this.facebookLikes + 100;
    };
    Object.defineProperty(website.prototype, "FacebookLikes", {
        //getter
        get: function () {
            return this.facebookLikes + 100;
        },
        //setter
        set: function (likes) {
            this.facebookLikes = 1000 + likes;
        },
        enumerable: true,
        configurable: true
    });
    return website;
}());
var google = new website('http://www.google.com.hk', 12343);
google.url = 'http://www.google.com.hk';
google.facebookLikes = 1234;
console.log(google.FacebookLikes);
google.FacebookLikes = 1000;
//# sourceMappingURL=greeter.js.map
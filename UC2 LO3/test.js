var a ="hello";
var b = 5;
console.log(!isNaN(a));
// using NaN/ isNaN
if (!isNaN(a)){
    console.log("meaning of life is"+(a*b)); //if statement is true
    
}
else{

    console.log("it is not a number");//if statement is false
}

//loops

var links= document.getElementsByTagName("a");
for(i=0;i<links.length; i++){
  links[i].className="link-"+i;
    
}
 //functions
 //variable scope
function getAverage(num1,num2,num3,num4) {
    var average= (num1+num2+num3+num4)/4;//local variable
    console.log(average);
    return average;
    
}

var myResult=getAverage(7,8,9,10); //global variable


function logResult(){
    console.log("the average is " + myResult);
}
logResult();

// using typeof

var a ="7";
var b=5.7;
var c=11;
var d=10;
console.log(a+b);
console.log(typeof (a+b));//gonna give the data type of the result
console.log(Math.round(b));// goona give the round no. of variable b
console.log(Math.max(b,c,d));//gonna select the highest no.
///string
var myString= 'I\'m having a "fun" string';
console.log(myString);
console.log(myString.length);//return back the number of characters in the string
console.log(myString.toUpperCase());//turn the string to uppercase
console.log(myString.indexOf("fun"));// return the index of fun
console.log(myString.indexOf("yeah"));// returns a -1 value because yeah is not found in the string
if (myString.indexOf('yeah')===-1){

    console.log("yeah is not in the string");
}
//split and slice
var Str="baboy,manok,baka,isda,gulay";
var sliceStr= Str.slice(1,15);
var splitStr= Str.split(',');

console.log(sliceStr);
console.log(splitStr);

// declaring an array
var myArray=[];
myArray[0]=1;
myArray[1]=24;
myArray[2]=NaN;
myArray[3]=false;
myArray[4]="hello world";

console.log(myArray);

var myArray2=[1,2,3,4,5];
console.log(myArray2);
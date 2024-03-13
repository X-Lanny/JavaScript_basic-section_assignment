//section 1
var assss = "none";
console.log(assss);

let food ="chicken";
food ="loobster";
console.log(food);

const Food = "chicken";
Food ="loobster";
console.log(Food)

const tmp =1;
console.log(tmp);
const ok ="ok";

function ssa(){
    const tmp =2;
    console.log(tmp,ok);
}
ssa()

if(true) {//if(true)什么含义
	const tmp = 3;
  console.log(tmp, ok);
}

//section 2
const NAME = "bommu";
let food1 = "shrimp";
console.log("my name is " + NAME + "and my favorite food is"+ food1)

//section 3
const firstName = "Jay";
const lastName = "chu";
const name = `My name is : ${firstName}${lastName}`;
console.log(name);
let person1 ={};
let person2 = {
    name:"jax",
}
console.log(person1);
console.log(person2);

person1.age= 18;
console.log(person1.age)
person1["style"]="black hair";
console.log(person1["style"]);

let person1 ={};
let key = "age";
person1[key] = 18;
console.log(person1[key])

let person3 ={
    name: "Joe",
    age:"null",
};
console.log(person3);
console.log(person3.age);

// let tmp;
// console.log(tmp);

var obj = {
    attr1:"attr1"
}
console.log(obj.attr1)
console.log(obj.att2)

//section 3 assignment
let a ,b ,c,d1,d2,e,f,g,age;
a ="string";
console.log(a);

b=3;
console.log(b);

c=false;
console.log(c);

d1={}
d2={
    name:"marry",
    age:21,
}
d1.age=20;
console.log(d1.age);

let key1="age";
d1[key1]=21;
console.log(d1[key1])

e={
    name:"sam",
    age:"18",
    height:null,
}
console.log(e.height)

console.log(f)

const Symbol1 =Symbol(30);
const Symbol2 =Symbol(30);
function conpair2(aa,bb){
    if(aa==bb){
        console.log("equal")
    }
    else
    {
        console.log("not equal")
    }
}
conpair2(Symbol1,Symbol2);

//section 4 note 
// let num1 = 1+2*3;
// let num2 =(1+2)*3;
// console.log(num1,num2);

// let num3= 1+"1"
// console.log(num3 );

//section 4 assignment
//相等与全等与逻辑操作符；
function make(a,b){
    if(a===b){
        console.log("a is equal to b.")
    }
    else if(a==b){
        console.log("sometimes, a is equal to b.")
    }
    else{
        console.log("a is not equal to b.")
    }
}
make("1",1);
make(1,1);
make("sahg","ajkfd");

// //取反
let fruit={
    apple:0,
    pear:2,
    orange:3,
}
function check_fruit(){
    if(!fruit.pear){
        console.log("there's no pears!")
    }
    else if(!fruit.apple){
        console.log("there's no apples!")
    }
}
check_fruit();
//二元条件操作符
function addnum(a,b){
        let result = a || b;
        console.log(result);   
}
addnum("","cat")//cat
addnum("",NaN)//NaN

// //三元条件操作符
function get_name(a){
    let name1 = a ? "sam":"marry";
    console.log(name1);
}
get_name(1);

//section 5 assignment
let sum = 0;
for(let i =1;i<=1000;i++){
    if(i%2 == 0){
        sum = sum;
    }
    else{
        sum = sum + i;
    }
    if(i%2 != 0){
        sum = sum + i;
    }
    if(!i%2 == 0){
        sum = sum + i;
    }
}
console.log(sum);
//不建议使用 !i%2 == 0 的写法，因为这样可能会引起误解。在 JavaScript 中，逻辑 NOT 运算符 ! 具有更高的优先级，因此 !i%2 会被解释为 (!i) % 2。

//section 6
const fun2 = function(a, b) {
    a + b;
}
// 这样写也不行 console.log(fun2(2,3))
function odd(a){
    let sum1 = 0;
    for(let i = 1; i<=a ;i++){
        if(i%2 !== 0){
            sum1 += i
        }
    }
    return sum1;
}
const odd1000 = odd(1000);
console.log(odd1000);






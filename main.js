//scopes:
// 1.Global Scope:
var a= 10;
function Alpha(){
    console.log("Alpha");
}
Alpha();
// 2.Local or Function Scope:
function add(){
    var b=11;
    console.log(b);
}
// 3.Block Scope:
{
    let abc=123;
    console.log(abc);
}

//null and undefined
var undef;
console.log(undef);
var abcd=null;
console.log(abcd);

//promises
var promise = new Promise(function(resolve,reject){
    const x="promise1";
    const y="promise2";
    if(x===y){
        resolve();
    }
    else{
        reject();
    }
})
promise.then(()=>{console.log("Success")}).catch(()=>{console.log("Failed")})

//promise chaining

new Promise(function(resolve,reject){
    setTimeout(()=>{resolve(1)},1000);
}).then(function(result){
    console.log(result);
    return result * 2;
}).then(function(result){
    console.log(result);
    return result * 4;
})
.then(function(result){
    console.log(result);
    return result * 6;
})


//pure functions
function calc(num){
    console.log(num * 5);
}
calc(5);

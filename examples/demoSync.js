var first=10;
// console.log(first)
// setTimeout(()=>{console.log("I am in interval")},1000)
// //even though the set timeout function is before the second variable but then this takes time and it assigns to some other so it takes time to execute
// //asynchronous behaviour
// var second=20;
// console.log(second);
// var third=30;
// console.log(third)



async function iAM(sec) {
    let promise=new promise((resolve,reject)    {
        setTimeout(()=> resolve("done"))
    });
    let result=await promise;
    console.log(sec)
}
iAM(1000)
iAM(2000)
iAM(4000)
iAM(3000)
//-----------------program1--------------------
// function a() {
//     console.log("function A")

// }
// function b() {
//     console.log("function B")
// }
// a()
// b()
//-----------------program2--------------------
// function demo(){
//     setTimeout(function(){
//         console.log("DEMO")
//     }, 3000);
// }
// demo()
//-----------------program3--------------------
// function getinfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },1000)
//     setTimeout(function(){
//         console.log("get id")
//     },3000)
//     setTimeout(function(){
//         console.log("get info by id")
//     },4000);
// }
// getinfo()
//-----------------program4--------------------
// function getinfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("get id")
//             setTimeout(function(){
//                 console.log("get info by id")
//             },4000)
//         },3000)
//     },1000)
    
    
// }
// getinfo()
//-----------------program5--------------------
// let pro =new Promise(function(resovle,reject) {
//     let a=20
//     let b=10
//     if(a==b){
//         resovle("1 st its equal")
//     }
//     else{
//         reject("not equal")
//     }
    
// })
// // consuming the promise
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })
//-----------------program6--------------------

// let pro1=new Promise(function(resovle,reject){
//     let x=2
//     let y=2
//     if(x==y){
//         console.log([11,22,33,44,55])//resovle([11,22,33,44,55])
//     }
//     else{
//         console.log([10,20,30,40,50])//reject([10,20,30,40,50])
//     }
// })
// .then(function (arr) {
//     console.log(arr)
// })
// .catch(function (arr) {
//     console.log(arr)
// })
// //-----------------program6--------------------

// let pro3=new Promise(function(resovle,reject){
//     let firstname="prakash"
//     if(firstname.startsWith('a')){
//         resovle("yes,its start with A")
//     }
//     else{
//         reject("no,its not")    }
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always work")
// })
//-----------------program7--------------------
function usercreated(){
    return new Promise(function(resovle,reject){
        setTimeout(function(){
            resovle("user created")
            
        }, 3000);
    })
}
function userid(){
    return new Promise(function(resovle,reject){
        setTimeout(function(){
            resovle("user id")
            
        }, 2000);
    })
}
function userinfo(){
    return new Promise(function(resovle,reject){
        setTimeout(function(){
            resovle("user info")
            
        }, 1000);
    })
}
// async function getuserinfo(){
//     let a=await usercreated()
//     console.log(a)
//     let b=await userid()
//     console.log(b)
//     let c=await userinfo()
//     console.log(c)
// }
// getuserinfo()
usercreated().then(function (str) {
    console.log(str)
    return userid()    
})
.then(function(str){
    console.log(str)
    return userinfo()
})
.then(function(str){
    console.log(str)
})
.catch(function(){
    console.log("error occured")
})
.finally(function(){
    console.log("i will always execute")
})
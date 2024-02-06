let birthYear = [1989,1990,1991,1992]
// [34,33,32,31]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023-el
})
console.log(q1)
///////////////////
let number=[11,22,33,44,55,66,77]
let q2=number.map(function(e1,index,arr){
    return e1+5
})
console.log(q2)
//////////
let marks =[22,11,33,44,55,66,34,56,44,34,78,45,60,92,98,97,]
let q3=marks.filter(function(e1,index,arr){
    return e1>50
})
console.log(q3)
/////////////
let total = [11,22,33]
let q5 = total.reduce(function(acc,el,index,arr){
    return acc + el
},5)
console.log(q5)
let total1=[1,2,3,4,5,6,7,8,9]
let q4=total1.reduce(function(acc,e1,indext,arr){
    return acc+1
},5)
console.log(q4)
//////////////////
let cites = ["pune","mumbai","banglore","kolkata"]

cites.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
////////////
let numberB = [11,22,33,44,55,33,66,77]
let q6 = numberB.filter(function(el){
    return el % 2 == 0
})

console.log(q6)

let q7 = numberB.find(function(el){
    return el % 2 == 0
})
console.log(q7)
//////
let marksB  = [11,22,33,44,22,33,44,55]
let q9 = marksB.every(function(el){
    return el > 10
})
console.log(q9)

// some()

let q10 = marksB.some(function(el){
    return el > 1000
})
console.log(q10)


// map() ----(el,index,arr)
// filter()  ---->  (el,index,arr)
// reduce()   ----> (acc,el, index,arr)
// forEach()  -- (el,index,arr)
// find()  -- (el,index,arr)
// findIndex()  -- (el,index,arr)
// some()  -- (el,index,arr)
// every()  -- (el,index,arr)
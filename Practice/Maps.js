// let Obj={
//     id:1,
//     name:"akash",
//     Address:"Hebbal"
// }
// console.log(Obj)

//.....................Map..........................//

let MapA= new Map()
MapA.set(1,"mango")
MapA.set(2,"papaya")
MapA.set(3,"orange")
MapA.set(4,"greps")
MapA.set(5,"chiku")
MapA.set(6,"banana")
console.log(MapA)


let MapB=new Map([
    [1,"happy"],
    [2,"sad"],
    [3,"moody"],
    [4,"unhappy"]
])
console.log(MapB)
console.log(MapB.size)

let q1=MapB.has(1)
console.log(q1)
let q2=MapB.get(4)
console.log(q2)

for(let [k,v] of MapB.entries()){
    console.log(k,v)
};
console.log(MapB.size);

for(let keys of MapB.keys())
{
    console.log(keys)
}
MapB.set("firstname","akash")
MapB.set("lastname","karambalkar")
console.log(MapB);
console.log(MapB.has("firstname"))
console.log(MapB.get("firstname"))
MapB.delete()
console.log(MapB);
MapB.clear()
console.log(MapB);
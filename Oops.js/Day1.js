// let Info={
//     firstname:"akash",
//     lastname:"karambalkar",
//     age:24,
//     id:2191246
// }
// console.log(Info)
// class personA{
//     firstname=undefined
//     lastname=undefined
//     age=undefined
//     id=undefined

// }
// let per=new personA();
// per.firstname="rahul"
// per.lastname="konduskar"
// per.age=12
// console.log(per)

// class personB{
//     constructor(fn,ln,ag,i){
//         this.firstname=fn
//         this.lastname=ln
//         this.age=ag
//         this.id=i
//     }}
//     let sanika=new personB("sanika","karambalkar",20,101)
//     console.log(sanika)
//     let sonu=new personB("sonu","patil",24,102)
//     console.log(sonu)

//     // using set and get key word
//     class personC{
//         set firstname(fn){
//             this.first_name=fn
//         }
//         set lastname(ln){
//             this.last_name=ln
//         }
//         set age(ag){
//             this.age_=ag
//         }
//         set id(i){
//             this.i_=i
//         }
//         get firstname(){
//             return this.first_name
//         }
//         get lastname(){
//             return this.last_name
//         }
//         get age(){
//             return this.age_
//         }
//         get id(){
//             return this.i_
//         }
//     }
//     let arjun=new personC()
//     arjun.firstname="arjun"
//     arjun.lastname="karambalkar"
//     arjun.age="55"
//     arjun.id="103"
//     console.log(arjun)
//     console.log(arjun.firstname)

    //===================================================
    
    // class bank{
    //     constructor(fn,bal){
    //         this.name=fn
    //         this.balance=bal
    //         this.transaction=[]
    //     }
    //     deposit(amt){
    //         this.balance=this.balance+amt
    //         this.transaction.push(amt)
    //         return this.balance

    //     }
    //     withdrawal(amt){
    //         amt<this.balance?this.balance=this.balance-amt:"insuficient balance"
    //         this.transaction.push(-amt)
    //         return this.balance
    //     }
    //     last_three_transaction(){
    //         return this.transaction.slice(-3)

    //     }
    //     totaldeposit(){
    //         let td=this.transaction.filter(function(el){
    //             return el>0
    //         })
    //         .reduce(function(acc,el){
    //             return acc+el
    //         },0)
    //         return td
    //     }
    //     totalwithdrawal(){
    //         let tw=this.transaction.filter(function(el){
    //             return el<0
    //         })
    //         .reduce(function(acc,el){
    //             return acc+el
    //         },0)
    //         return tw
    //     }
    // }
    // let prakash=new bank("prakash",10000)
    // prakash.deposit(100)
    // prakash.deposit(1000)
    // prakash.deposit(10)
    // prakash.deposit(2000)
    // prakash.deposit(120)

    // prakash.withdrawal(500)
    // prakash.withdrawal(50)
    // prakash.withdrawal(5000)

    // console.log(prakash.totaldeposit())
    // console.log(prakash.totalwithdrawal())
    // console.log(prakash.last_three_transaction())

    // ================practice on bank=====================
    class bank{
        constructor(fn,bal){
            this.name=fn
            this.balance=bal
            this.transaction=[]
        }
        deposit(amt){
            this.balance+=amt
            this.transaction.push(amt)
            return this.balance
        }
        withdrawal(amt){
            amt<this.balance?this.balance-=amt:"insuficient balance"
            this.transaction.push(-amt)
            return this.balance
        }
        totaldeposit(){
            let td=this.transaction.filter(function(el){
                return el>0
            })
            .reduce(function(acc,el){
                return acc+el
            },0)
            return td

        }
        totalwithdrawal(){
            let tw=this.transaction.filter(function(el){
                return el<0})
                .reduce(function(acc,el){
                    return acc+el
                })
                return tw
            }
            last_three_transaction(){
                return this.transaction.slice(-3)
                
            }
        }
        let arjun=new bank("arjun",300000)
    arjun.deposit(100000)
    arjun.deposit(10)
    arjun.deposit(102)
    arjun.deposit(2200)
    arjun.deposit(1220)
    console.log(arjun.totaldeposit())
    arjun.withdrawal(800)
    console.log(arjun.totalwithdrawal()) 
    console.log(arjun.last_three_transaction())

    
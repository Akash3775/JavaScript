class AdditionOfNumbers{
    addition(a,b){
        console.log(a+b);
    }
    addition(a,b,c){
        console.log(a+b+c)
    }
    addition(a,b,c,d){
        console.log(a+b+c+d)
    }
}
class multiplicationOfNumber extends AdditionOfNumbers{
    multiplication(a,b,c,d){
        if(a!=undefined&& b!=undefined&&c!=undefined&&d!=undefined){
        console.log(a*b*c*d)
        }
        else if(a!=undefined&& b!=undefined&&c!=undefined){
            console.log(a*b*c)

        }
        else if(a!=undefined&& b!=undefined){
            console.log(a*b)

        }
    }


} 

let add=new multiplicationOfNumber;
add.addition(12,23)
add.addition(10,20,30)
add.multiplication(12,20,30)

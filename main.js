/*Task2
var a="hello world"
console.log(a);




/*Task3
let a: string=("Muhammad Anas")
let lowercase: string=a.toLowerCase();
console.log(lowercase);
let uppercase: string=a.toUpperCase();
console.log(uppercase);
let word=a.slice(0,1);
let Titlecase= word.toLocaleUpperCase();

console.log(Titlecase+a.slice(1));/*

/*Task4
console.log('imran khan once said,"we shall never lie and always speak the truth"')

/*Task 5
let famous_person="imran khan"
let message:string =famous_person + ' once said,"we shall never lie and always speak the truth"'
console.log(message)

//Task#06
//let myname= "\n \t Muhammad Anas \n \t";
//console.log("my name is ",myname)
//let strippedname= "Muhammad Anas";
//console.log("stripped name is",strippedname)

//Task#07
//console.log("addition",5+3);
//console.log("subtraction",10-2)
//console.log("multiplication",4*2)
//console.log("addition",16/2);


//Task#08
//console.log(4+4,"\n")
//console.log(4+4,"\n")
//console.log(4+4,"\n")
//console.log(4+4,"\n")

//Task#9
//let favouritenumber=4
//console.log("My favourite number is ",favouritenumber);

//Task#10
//Muhammad Anas
//date:25-04-2024
//let favouritenumber=4
//console.log("My favourite number is ",favouritenumber);
//Basically the above shows my favourite number that is stored in a variable and then
//i am printing that variable.

//Task#11
//let names= ["Ahmed","Kamran","babar","Iftikhar"]
//for(let i=0;i<4;i++)
 //   {
 //       console.log(names[i])
  //  }


//Task#12

//let names= ["Ahmed","Kamran","babar","Iftikhar"]
//for(let i=0;i<4;i++)
   //{
   //    console.log("hey",names[i])
  // }

  //Task#13
  
 // let transpotation=["car", "plane","bike"]
  //for(let i=0;i<3;i++)
  //  {
   //   console.log("I would like to own a",transpotation[i])
   // }

   //Task#14

  // let guest=["noman","maaz","muzammil"]
  // for (let i=0;i<3;i++)
  //  {
  //    console.log(guest[i],"you are cordially invited to my home for dinner")
   // }

   //Task#15
  // let guest=["noman","maaz","muzammil"]
   //let changelist=guest.splice(0,1,"ahmed")
   //console.log(changelist,"unfortunately! can not make it to the dinner")
   //for (let i=0;i<3;i++)
   // {
    //  console.log(guest[i],"you are cordially invited to my home for dinner")
   // }

   //Task#16

   /* let guest=["noman","maaz","muzammil"]
    console.log("I have a good news! I have found bigger table for dinner\n")
    guest.unshift("kamran")
    guest.splice(2,0,"Adnan")
    guest.push("ali")
   for (let i=0;i<guest.length;i++)
    {
      console.log(guest[i],"you are cordially invited to my home for dinner")
    } /** */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createcar(manufacture, model, optional) {
    return __assign({ manufacture: manufacture, model: model }, optional);
}
var mycar = createcar("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);

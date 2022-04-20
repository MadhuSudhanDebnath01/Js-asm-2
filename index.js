console.log("working");

//question - 1

let s ="ggjhjmvfdf";

let r = new Set(s);
let nr ="";
for(item of s){
    nr+=item;
}
s =nr;
console.log(s);


//question - 2

let str ="abcadeecfb";
let myMap = new Map();

let m = 0;
str.split("").forEach(item => {

     if(myMap.has(item)==true){   

         m = myMap.get(item)+1;
         myMap.set(item,m);
     }
     else{
         myMap.set(item,1);
     }     
     
});

console.log(myMap);

for(let [keys,val] of myMap.entries() ){
    console.log( keys+ " - "+val );
}
const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (pet) => {

    return ('new Date ${pet},new Date().getFullYear() - pet.bornOn');

}


const petsWithAge = [];

    
    pet.age = getAge(pet);
    petsWithAge.map(pet);

    

console.log(petsWithAge);


const dogs = [];
function  filterdogs(){
dogs.filter((pets => pet.type =="dog"));

}



const jasper= [];

    function filtername(){

   name.filter((pets=>pet.name=="Jasper"))

   }
    console.log("Jasper is " + jasper.age + " years old");
  




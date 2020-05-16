const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = (pet) => {

    return ('new Date ${pet},new Date().getFullYear() - pet.bornOn');

}


const petsWithAge = [];
for (let i = 0; i < pets.length; i++) {
    const pet = pets[i];
    pet.age = getAge(pet);

    petsWithAge.push(pet);
}
console.log(petsWithAge);


const dogs = [];
for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  if (pet.type === "dog") {
    dogs.push(pet);
  }
}
console.log(dogs);


const jasper;
for (let i = 0; i < pets.length; i++) {
  const pet = pets[i];
  if (pet.name === "Jasper") {
    jasper = pet;
  }
}
console.log("Jasper is " + jasper.age + " years old");


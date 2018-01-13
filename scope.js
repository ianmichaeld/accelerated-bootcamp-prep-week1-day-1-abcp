function setSpeciesVariable() {
  var species = "dog";
}

function dogInfo(){
  name = "Fido";
  console.log("Species is " + species); //undefined
  console.log("Name is " + name); 
}

setSpeciesVariable();
dogInfo();

function setSpeciesVariable() {
  species = "cat"
}

function catInfo() {
  let species = 'Fish'
  let name = "Felix"
  let mood = "sleepy"
  
  if(species === 'Fish'){
    let species = 'Fishy';
    console.log(species);
  }
  console.log("Species is " + species);
  console.log("Name is " + name);
  console.log("Mood is " + mood)
}

setSpeciesVariable();
catInfo();
dogInfo();


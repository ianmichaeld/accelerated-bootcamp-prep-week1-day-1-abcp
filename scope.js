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
  var species = 'Fish'
  var name = "Felix"
  var mood = "sleepy"
  console.log("Species is " + species);
  console.log("Name is " + name);
  console.log("Mood is " + mood)
}

setSpeciesVariable();
catInfo();


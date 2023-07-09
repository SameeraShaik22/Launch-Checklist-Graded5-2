// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput===undefined||testInput.trim()===""){
      return "Empty"
    }
    if(true===isNaN(testInput) ){
      return "Not a Number"
    }
     if(false===isNaN(testInput) ){
      return "Is a Number"
    } 
    }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

 if (validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel)==="Empty"){
   alert("Please enter all Fields")
 }
 if(validateInput(pilot)==="Is a Number"||validateInput(copilot)==="Is a Number"){
    alert( "Please Enter String")
 }
 if(validateInput(fuelLevel)==="Not a Number"||validateInput(cargoLevel)==="Not a Number"){
    alert(  "Please Enter Number")
 }

let pilotStatus=document.getElementById("pilotStatus")
pilotStatus.innerHTML=`Pliot ${pilot} is ready to launch`

let fuelStatus=document.getElementById("fuelStatus")
  if(fuelLevel<10000){
   
    fuelStatus.innerHTML="Fuel level not enough for launch"
    list.style.visibility='visible'
 }   


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

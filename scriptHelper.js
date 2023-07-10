// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget=document.getElementById("missionTarget")
  missionTarget.innerHTML=`<h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src=${imageUrl}> `
   
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
let copilotStatus=document.getElementById("copilotStatus")
copilotStatus.innerHTML=`CoPliot ${copilot} is ready to launch`
list.style.visibility='visible'
let fuelStatus=document.getElementById("fuelStatus")

  if(fuelLevel<10000){
    fuelStatus.innerHTML="Fuel level not enough for launch"
    list.style.visibility='visible'
    let launchStatus=document.getElementById("launchStatus")
launchStatus.innerHTML="Shuttle is not ready for launch"
launchStatus.style.color="red"
 }   
 let cargoStatus=document.getElementById("cargoStatus");

 if(cargoLevel>10000){
  cargoStatus.innerHTML="Cargo mass too much mass for the shuttle to take off."
  list.style.visibility='visible'
  let launchStatus=document.getElementById("launchStatus")
launchStatus.innerHTML="Shuttle is not ready for launch"
launchStatus.style.color="red"
}   
if(fuelLevel>=10000 && cargoLevel<=10000){
  fuelStatus.innerHTML="Fuel level is enough for launch"
  cargoStatus.innerHTML="Cargo mass is enough for the shuttle to take off."
  let launchStatus=document.getElementById("launchStatus")
launchStatus.innerHTML="Shuttle is ready for launch" 
list.style.visibility='visible'
launchStatus.style.color="green"
}

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
  return response.json()    
  });

    return planetsReturned;
}

function pickPlanet(planets) {
  let getPlanet = Math.floor(Math.random() * planets.length);
  return planets[getPlanet];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

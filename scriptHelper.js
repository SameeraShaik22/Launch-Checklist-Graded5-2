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
    if(testInput===undefined||testInput===""){
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
    let launchStatus=document.getElementById("launchStatus")
if(validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel)==="Empty"){
    alert("Please fill al the fields")  }
   if (validateInput(pilot)==="Is a Number"){
    alert("Please enter String for Pilot and CoPilot")   
   } 
   if (validateInput(copilot)==="Is a Number"){
    alert("Please enter Number for FuelLevel and Cargo mass")   
   } 
   
   
   let pilotStatus=document.getElementById("pilotStatus")
    pilotStatus.innerHTML=`Pilot ${pilot} is ready to Launch` 

    let copilotStatus=document.getElementById("copilotStatus")
    copilotStatus.innerHTML=`CoPilot ${copilot} is ready to Launch` 
   
   if(fuelLevel<10000){
   launchStatus.innerHTML="Shuttle not ready for launch"  
   let faultyItems=document.getElementById("faultyItems")
   faultyItems.style.visibility="visible"
   let fuelStatus=document.getElementById("fuelStatus")
   fuelStatus.innerHTML="Fuel level low to Launch"
   launchStatus.style.color="#C7254E"
   }

   if(cargoLevel>10000) {
    launchStatus.innerHTML="Shuttle not ready for launch" 
    let faultyItems=document.getElementById("faultyItems")
   faultyItems.style.visibility="visible"
   let cargoStatus=document.getElementById("cargoStatus")
   cargoStatus.innerHTML=" There is too much mass for the shuttle to take off."
   launchStatus.style.color="#C7254E"
   }
   if(fuelLevel>=10000 && cargoLevel>=10000){
    let faultyItems=document.getElementById("faultyItems")
    faultyItems.style.visibility="visible"
    let launchStatus=document.getElementById("launchStatus")
    launchStatus.innerHTML="Shuttle is ready for launch" 
    launchStatus.style.color="#419F6A" 
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
  let allPlanets = Math.floor(Math.random() * planets.length);
  return planets[allPlanets];
 }

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

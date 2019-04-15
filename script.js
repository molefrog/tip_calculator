const initiate = function(){
  document.getElementById('calc').addEventListener('click', suggestTip);
  document.getElementById('service').addEventListener('change', servSatisfaction);
}

//Define a tip amount multiplier based on user choice
const servSatisfaction = function(e){
  switch(e.target.value) {
    case 'excellent':
      console.log("exc");
      return satisfactionIndex = 1.7
    case 'great':
      console.log("great");
      return satisfactionIndex = 1.5
    case 'unsatisfactory':
      console.log("unsatisfactory");
      return satisfactionIndex = 0.7
    default: 
      console.log("default");
      return satisfactionIndex = 1
  }
}   

//If servSatisfaction doesn't run, use default value corresponding to 'great'
let satisfactionIndex = 1.5

//Suggest a tip given the formula: (billamt * service) / people
const suggestTip = function(){
  let billamt = document.getElementById('billamt').value.replace(/,/g, '.');
  let people = document.getElementById('people').value;
  
  //Take 15% as widely recommended tip amount
  let suggestion = (((billamt / 100 * 15)  * satisfactionIndex) / people);

  //Output the suggestion in a new paragraph
  const showOutput = function(suggestion){
    const addOutput = document.createElement("p");
    const card = document.getElementById("main-card");
    const output = card.appendChild(addOutput).innerHTML = `Suggested tip amount for each person is ${suggestion.toFixed(2)}`;
    output.id = "output";
    console.log("Node created");
  }
  showOutput(suggestion);
}

document.addEventListener('DOMContentLoaded', initiate);
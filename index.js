// code your solution here
/*function saturdayFun(){
    console.log(`This Saturday, I want to ${activity}!`);
    
}
saturdayFun(activity = "roller-skate");

function mondayWork(){
    console.log(`This Monday, I want to ${activity}!`);
    
}
mondayWork(activity = "go to the office");*/

// Saturday Fun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Monday Work function expression
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  };
  
  // Wrap Adjective function
  function wrapAdjective(symbol) {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  
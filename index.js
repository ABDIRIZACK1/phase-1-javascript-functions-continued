// code your solution here
// Implementing the function saturdayFun
function saturdayFun(activity = 'roller-skate') {
          return `This Saturday, I want to ${activity}!`;
        }
        
        // Implementing the function mondayWork
        function mondayWork(activity = 'go to the office') {
          return `This Monday, I will ${activity}.`;
        }
        
        // Implementing the function wrapAdjective
        function wrapAdjective(flair = '*') {
          return function(adjective = 'special') {
            return `You are ${flair}${adjective}${flair}!`;
          }
        }
        
        // Usage examples
        const saturdayActivity = saturdayFun('hike');
        console.log(saturdayActivity); // Output: This Saturday, I want to hike!
        
        const mondayTask = mondayWork('work on projects');
        console.log(mondayTask); // Output: This Monday, I will work on projects.
        
        const encouragingPromptFunction = wrapAdjective('!!!');
        const encouragingMessage = encouragingPromptFunction('awesome');
        console.log(encouragingMessage); // Output: You are !!!awesome!!!.
        
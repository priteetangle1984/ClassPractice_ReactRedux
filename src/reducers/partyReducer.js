// the first argument is the state that we are updating
// the second is the action
function reducer (state, { type, payload: { name, step }}) {
    switch (type) {
       case "add_adventurer": {
           if (name === '') {
               return state;
           } 
           let hasThisName = false;
           state.forEach((adventurer) => {
               if (adventurer.name === name) {
                   alert(`There is already a ${name} in your party. Differentiate them somehow!`);
                   hasThisName = true;
               }
           });
   
           if (hasThisName) return state;
           return [{ name: name, health: 100 }, ...state];
       }
       case "remove_adventurer" : {
           return state.filter((s) => s.name !== name);
       }
       case "increment_health": {
           return state.map((s) => {
               if (s.name === name) {
                   let newHealth = s.health + step;
                   newHealth = newHealth > 100 ? 100 : newHealth;
   
                   return {
                       ...s,
                       health: newHealth
                   };
               } else {
                   return s;
               }
           }) 
       }
       case "decrement_health": {
           const newState = state.map((s) => {
               if (s.name === name) {
                   let newHealth = s.health - step;
                   newHealth = newHealth < 0 ? 0 : newHealth;
   
                   return {
                       ...s,
                       health: newHealth
                   }
               } else {
                   return s;
               }
           })
   
           console.log(newState)
   
           const filteredNewState = newState.filter((s) => s.health !== 0);
   
           if (newState.length !== filteredNewState.length) {
               alert(`${name} has retired from adventuring...`);
           }
   
           return filteredNewState;
       }
       default: {
           throw Error("Unknown Action: " + type);
       }
    }
   }
   
   export default reducer;
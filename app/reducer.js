/**
 * @param  {Object} state  Old state from the app
 * @param  {Object} action Redux action (I hope it has a "type" and "data")
 * @return {Object} new state { snacks: [...] }
 */
export default function reducer(state, action) {
  switch (action.type) {
    // CREATE: Add a new snack
    case 'SNACK@CREATE':
      return { snacks: [action.data, ...state.snacks] };
    // READ: Loading all snacks
    case 'SNACK@FIND_ALL':
      return { snacks: [...action.data, ...state.snacks] };
    default:
      return state || { snacks: [] };
  }
  // READ: Load a single snack
  // UPDATE: Update the data for a single snack
  // DESTROY: Remove a snack from the list
}





// if (state) {
//   return state;
// } else {
//   return { snacks: [] };
// }
// return state ? state : { snacks: [] };
// return state || { snacks: [] };

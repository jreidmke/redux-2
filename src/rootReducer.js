const INITIAL_STATE = { phrases: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { 
        ...state, 
        phrases: [...state.phrases, { ...action.payload }] 
      };

    case "REMOVE":
      return { 
        ...state, 
        phrases: state.phrases.filter(
          p => p.uuid !== action.payload.uuid
        ) };

    default:
      return state;
  }
}

export default rootReducer;
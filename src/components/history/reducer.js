const initialState = {
    history: [],
  };
  const historyReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD_HISTORY":
        for(let i = 0 ;i< state.history.length;i++){
            if(state.history[i].url === payload.history.url){
                return state;
            }
        }
        const history = [...state.history, payload.history];
        return { history };
        case "VIEW_HISTORY":
            return state;
      default:
        return state;
    }
  };
  const addAction = (history) => {
    return {
      type: "ADD_HISTORY",
      payload: { history },
    };
  };
  const viewAction = (history) => {
    return {
      type: "VIEW_HISTORY",
      payload: { history },
    };
  };

  module.exports = {
    historyReducer,
    addAction,
    initialState,
    viewAction
  };
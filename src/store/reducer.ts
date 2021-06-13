import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LANGUAGE_UI':
        return {
          ...state,
          languageUI: action.languageUI,
        }
      default:
        return state
    }
}

export default reducer;
import initialState from './initialState';

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LANGUAGE_UI':
        return {
          ...state,
          uiLang: action.uiLang,
        }
      case 'SET_MENU_ITEM':
        return {
          ...state,
          menuItem: action.menuItem,
        }
      case 'SET_LEARNING_LANG':
        return {
          ...state,
          learingLang: action.learingLang,
        }
      default:
        return state
    }
}

export default reducer;
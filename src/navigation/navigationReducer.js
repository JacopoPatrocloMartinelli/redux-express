const { type } = require('./navigationActions')

const initalNavigationState = {
  body: {},
  query: {},
  headers: {},
  params: {},
}

module.exports = (state = initalNavigationState, action) => {
  switch (action.type) {
    case type.INIT_ACTION:
      return {
        ...state,
        ...action.payload
      }
  
    default:
      return state
      break;
  }
}
const { combineReducers, createStore } = require('redux')
const navigation = require('./navigation/navigationReducer')
const { init, requestPayloadFactory } = require('./navigation/navigationActions')

const middleWare = (customReducers) =>
  (req, res, next) => {
    if (customReducers) {
      req.Store = createStore(combineReducers({
        ...customReducers,
        navigation,
      }))
    } else {
      req.Store = createStore(combineReducers({
        navigation,
      }))
    }
    req.Store.dispatch(init(requestPayloadFactory(req)))
    next()
  }


module.exports = {
  middleWare
}

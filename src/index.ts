import { ReducersMapObject } from '../node_modules/redux';
import { Response, NextFunction } from 'express';
import { combineReducers, createStore } from 'redux';
import navigation from './navigation/navigationReducer';
import { RequestWithStore } from './types/global';

const { init, requestPayloadFactory } = require('./navigation/navigationActions')

const middleWare = (customReducers: ReducersMapObject) =>
  (req: RequestWithStore, res: Response, next: NextFunction) => {
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

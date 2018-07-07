"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var navigationReducer_1 = require("./navigation/navigationReducer");
var _a = require('./navigation/navigationActions'), init = _a.init, requestPayloadFactory = _a.requestPayloadFactory;
var middleWare = function (customReducers) {
    return function (req, res, next) {
        if (customReducers) {
            req.Store = redux_1.createStore(redux_1.combineReducers(__assign({}, customReducers, { navigation: navigationReducer_1.default })));
        }
        else {
            req.Store = redux_1.createStore(redux_1.combineReducers({
                navigation: navigationReducer_1.default,
            }));
        }
        req.Store.dispatch(init(requestPayloadFactory(req)));
        next();
    };
};
module.exports = {
    middleWare: middleWare
};
//# sourceMappingURL=index.js.map
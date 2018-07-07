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
var navigationActions_1 = require("./navigationActions");
var initalNavigationState = {
    body: {},
    query: {},
    headers: {},
    params: {},
};
exports.default = (function (state, action) {
    if (state === void 0) { state = initalNavigationState; }
    switch (action.type) {
        case navigationActions_1.INIT_ACTION:
            return __assign({}, state, action.payload);
        default:
            return state;
            break;
    }
});
//# sourceMappingURL=navigationReducer.js.map
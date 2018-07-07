"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INIT_ACTION = '[ROUTE] INIT';
exports.init = function (requestPayload) { return ({
    type: exports.INIT_ACTION,
    payload: requestPayload
}); };
exports.requestPayloadFactory = function (req) { return ({
    body: req.body,
    query: req.query,
    headers: req.headers,
    params: req.params,
}); };
//# sourceMappingURL=navigationActions.js.map
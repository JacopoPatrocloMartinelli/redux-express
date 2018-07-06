const INIT_ACTION = '[ROUTE] INIT'

module.exports = {
  type: {
    INIT_ACTION
  },
  init: (requestPayload) => ({
    type: INIT_ACTION,
    payload: requestPayload
  }),
  requestPayloadFactory: (req) => ({
    body: req.body,
    query: req.query,
    headers: req.headers,
    params: req.params,
  })
}
import { Request } from "../../node_modules/@types/express";
import { RequestPayload } from "../types/global";
import { Action } from "../../node_modules/redux";

export const INIT_ACTION = '[ROUTE] INIT'

export interface initAction extends Action {
  payload: RequestPayload
}

export const init = (requestPayload: RequestPayload): initAction => ({
  type: INIT_ACTION,
  payload: requestPayload
});

export const requestPayloadFactory = (req: Request): RequestPayload => ({
  body: req.body,
  query: req.query,
  headers: req.headers,
  params: req.params,
})
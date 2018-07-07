import { Request } from "../../node_modules/@types/express";
import { RequestPayload } from "../types/global";
import { Action } from "../../node_modules/redux";
export declare const INIT_ACTION = "[ROUTE] INIT";
export interface initAction extends Action {
    payload: RequestPayload;
}
export declare const init: (requestPayload: RequestPayload) => initAction;
export declare const requestPayloadFactory: (req: Request) => RequestPayload;

import { Request } from "../../node_modules/@types/express-serve-static-core";
import { Store } from "../../node_modules/redux";

export interface RequestPayload {
  body: Object,
  query: Object,
  headers: Object,
  params: Object,
}

export interface RequestWithStore extends Request {
  Store: Store
}

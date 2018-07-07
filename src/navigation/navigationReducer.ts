import { RequestPayload } from '../types/global';
import {
  initAction,
  INIT_ACTION
} from './navigationActions';

const initalNavigationState: RequestPayload = {
  body: {},
  query: {},
  headers: {},
  params: {},
}

export default (state = initalNavigationState, action: initAction) => {
  switch (action.type) {
    case INIT_ACTION:
      return {
        ...state,
        ...action.payload
      }
  
    default:
      return state
      break;
  }
}
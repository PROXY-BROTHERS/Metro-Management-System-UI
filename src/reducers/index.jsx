import loginSignupState from "./LoginSignupReducers";
import topNavigationState from "./TopNavigationReducers";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loginSignupState,
    topNavigationState
});

export default rootReducer;
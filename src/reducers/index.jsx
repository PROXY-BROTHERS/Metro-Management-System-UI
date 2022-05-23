import loginSignupState from "./LoginSignupReducers";
import topNavigationState from "./TopNavigationReducers";
import signupRoleState from "./RoleSelectorReducer";
import isEmailValidState from "./EmailValidReducer";
import emailExistsState from "./EmailExistsCheckReducer";

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    loginSignupState,
    topNavigationState,
    signupRoleState,
    isEmailValidState,
    emailExistsState
});

export default rootReducer;
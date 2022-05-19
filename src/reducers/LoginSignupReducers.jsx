const initialState = 0;
const loginSignupState = (state = initialState, action) => {
    switch(action.type) {
        case "ATLOGIN" : {
            state = 1;
            return state;
        }
        case "ATSIGNUP": {
            state = 0;
            return state;
        }
        default: return state;
    }
}

export default loginSignupState;
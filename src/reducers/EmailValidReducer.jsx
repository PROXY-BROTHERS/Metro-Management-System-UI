
const initialState = 0;
const isEmailValidState = (state = initialState, action) => {
    switch(action.type) {
        case "VALID" : {
            state = 1;
            return state;
        }
        case "INVALID" : {
            state = 2;
            return state;
        }
        default: return state;
    }
}

export default isEmailValidState;
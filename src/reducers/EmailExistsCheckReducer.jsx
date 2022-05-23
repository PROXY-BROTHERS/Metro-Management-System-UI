
const initialState = 0;
const emailExistsState = (state = initialState, action) => {
    switch(action.type) {
        case "EXISTS" : {
            state = 1;
            return state;
        }
        case "NOTEXISTS" : {
            state = 0;
            return state;
        }
        default: return state;
    }
}

export default emailExistsState;
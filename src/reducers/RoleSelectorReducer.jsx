
const initialState = 0;
const signupRoleState = (state = initialState, action) => {
    switch(action.type) {
        case "USER" : {
            state = 1;
            return state;
        }
        case "DOCTOR" : {
            state = 2;
            return state;
        }
        case "CLINIC" : {
            state = 3;
            return state;
        }
        case "HOSPITAL" : {
            state = 4;
            return state;
        }
        case "ADMIN" : {
            state = 5;
            return state;
        }
        case "SUPER" : {
            state = 6;
            return state;
        }
        default: return state;
    }
}

export default signupRoleState;
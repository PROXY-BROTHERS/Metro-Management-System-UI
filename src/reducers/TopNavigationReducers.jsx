

const initialState = 0;
const topNavigationState = (state = initialState, action) => {
    switch(action.type) {
        case "ATHOME" : {
            state = 0;
            return state;
        }
        case "ATABOUT" : {
            state = 1;
            return state;
        }
        case "ATNEWS" : {
            state = 2;
            return state;
        }
        case "ATEVENT" : {
            state = 3;
            return state;
        }
        case "ATTEAM" : {
            state = 4;
            return state;
        }
        case "ATUSERBTN" : {
            state = 5;
            return state;
        }
        default: return state;
    }
}

export default topNavigationState;
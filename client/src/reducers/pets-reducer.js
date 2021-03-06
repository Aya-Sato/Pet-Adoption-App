const initialState = {
    pets: null,
    status: "idle"
}

export default function petsReducer(state = initialState, action) {
    switch (action.type) {
        case "REQUEST_PETS": {
            return {
                ...state,
                status: "loading"
            };
        }
        case "RECEIVE_PETS": {
            return {
                ...state,
                pets: action.pets,
                status: "idle"
            };
        }
        case "RECEIVE_PETS_FAILED": {
            return {
                ...state,
                status: "error"
            };
        }
        default: {
            return state;
        }
    }
}
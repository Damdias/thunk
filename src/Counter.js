let initialState = {
    counter: 0
}

let counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return { counter: state.counter + 1 };
        case "REDUCE":
            return { counter: state.counter - 1 };
        default:
            return initialState;

    }
}

export default counterReducer;
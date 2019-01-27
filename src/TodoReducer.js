let initialState = [];

let todoReducer = (state = initialState, action) => {
    let current = [...state];
    switch (action.type) {
        case "ADDTODO":
            return current.push(action.payload);
        case "REMOVETODO":
            return current.filter(a => a.text !== action.payload.text);
        default:
            return state;
    }
}

export default todoReducer;
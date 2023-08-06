const initialState = { value: 0 }

function accountReducer(state = initialState, action: any) {
    switch(action.type){
        case "deposit":
            return { ...state, value: state.value + action.payload };
        case "withdraw":
            return { ...state, value: state.value - action.payload };
        default:
            return state;
    }
}


export default accountReducer;
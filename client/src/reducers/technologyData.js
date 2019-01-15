let initialState = {
    technology: []
}

const technologyData = (state = initialState, action)=>{
    switch (action.type) {
        case 'LOAD_TECHNOLOGY': return Object.assign({}, state, action);
        default: return state;
    }
}

export default technologyData;
let initialState = {
    post: []
}

const postData = (state = initialState, action)=>{
    switch (action.type) {
        case 'LOAD_POST': return Object.assign({}, state, action);
        default: return state;
    }
}

export default postData;
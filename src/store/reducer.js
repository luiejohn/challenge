import * as actionTypes from './actions'

const initialState = {
    currentCategory: 'Men',
}

const reducer = (state = initialState, action) => {
    if( action.type === 'SET_CATEGORY') {
        return {
            currentCategory: action.newCat
        }
    }
    return state;
};

export default reducer;
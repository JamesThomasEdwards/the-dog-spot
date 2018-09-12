import { INCREASE_COUNTER, ITEM_ON_PAGE } from '../actions/types';

const initialState = {
    counter: 0,
    item: ''
};

export default (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case INCREASE_COUNTER:
            newState.counter = newState.counter + 1;
            return newState
        case ITEM_ON_PAGE:
            newState.item = action.payload
            return newState
        default:
            return state;
    }
}
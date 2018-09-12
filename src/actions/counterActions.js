import { INCREASE_COUNTER, ITEM_ON_PAGE } from './types';

export const increaseCounter = () => {
    return {
        type: INCREASE_COUNTER
    }
}
export const itemOnPage = (payload) => {
    return {
        type: ITEM_ON_PAGE,
        payload
    }
}
export const fetchData = (api) => {
    return (dispatch) => {
        setTimeout(() => {
            fetch(api)
                .then(data => data.json())
                .then(data => {
                    dispatch(itemOnPage(data.copyright))
                })
        }, 5000)

    }
}
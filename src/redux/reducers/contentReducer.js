const SET_SHOPPING_ITEMS = 'content/SET_SHOPPING_ITEMS';

let initialState = {
    items: []
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SHOPPING_ITEMS:
            return {
                ...state,
                items: [...action.shoppingItems]
            }
        default:
            return state;
    }
}

export const setShoppingItemsAC = (shoppingItems) => ({ type: SET_SHOPPING_ITEMS, shoppingItems });

export const getShoppingItemsTC = () => {
    return (dispatch) => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => dispatch(setShoppingItemsAC(json)))
    }
}

export default contentReducer;
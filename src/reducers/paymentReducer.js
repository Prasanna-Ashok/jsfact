export const paymentReducer = (state = { loading: false, flag: false},action) => {
    if (action.data) {
        console.log(action.data);
    }
    switch (action.type) {
        case 'PAYMENT_STARTED':
            return Object.assign({}, state, { loading: true, flag: false });
        case 'PAYMENT_SUCCESS':
            return Object.assign({}, state, { data: action.data }, { loading: false , flag: true});
        case 'PAYMENT_ERROR':
            return Object.assign({}, state, { loading: false, flag: false });
        default:
            return state;
    }
}
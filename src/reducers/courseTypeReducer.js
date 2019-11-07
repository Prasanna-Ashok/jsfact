export const courseTypeReducer = (state={loading: false}, action) =>{
    if(action.data){
    console.log(action.data);
}
    switch(action.type){
        case 'COURSE_STARTED':
            return Object.assign({}, state, {loading: true});
        case 'COURSE_SUCCESS':
            return Object.assign({}, state,{data: action.data},{loading: false});
        case 'COURSE_ERROR':
            return Object.assign({}, state, {loading: false});
        default: 
            return state;
        }
}
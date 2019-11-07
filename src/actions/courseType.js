import axios from 'axios';

const course_Type_Started = () =>{
    return({
        type:'COURSE_STARTED'
    });
}

const course_Type_Success = (data) =>{
    return({
        type: 'COURSE_SUCCESS',
        data: data
    });
}

const course_Type_Error = () =>{
    return({
        type:'COURSE_ERROR'
    });
}


export const courseTypeThunk = (input) =>{
    return dispatch =>{
        console.log('dispatch started');
        dispatch(course_Type_Started);
        const url='http://localhost:8080/courses/' + input;

        axios.get(url).then((res) =>{
            const courseRes = JSON.stringify(res.data);
            console.log('response is '+ courseRes);
            dispatch(course_Type_Success(res.data));
        }).catch((err) =>{
            console.log(err);
            dispatch(course_Type_Error);
        })

    }
}
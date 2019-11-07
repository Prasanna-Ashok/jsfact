import axios from 'axios';

const enroll_Course_Started = () =>{
    return({
        type : 'ENROLL_STARTED'
    });
}

const enroll_Course_Success = (data) =>{
    return({
        type: 'ENROLL_SUCCESS',
        data: data
    })
}

const enroll_Course_Error = () =>{
    return({
        type: 'ENROLL_ERROR'
    })
}

export const enrollCourseThunk = (input) =>{
    return dispatch =>{
        dispatch(enroll_Course_Started);
        const url = 'http://localhost:8080/enroll/' + input;

        axios.get(url).then((res) =>{
            const enrollCourse = JSON.stringify(res.data);
            console.log(enrollCourse);
            dispatch(enroll_Course_Success(res.data));
        }).catch((err) =>{
            console.log(err);
            dispatch(enroll_Course_Error);
        })
    }
}
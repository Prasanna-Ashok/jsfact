import axios from 'axios';

const payment_Action_Started = () => {
    return ({
        type: 'PAYMENT_STARTED'
    })
}

const payment_Action_Success = (data) => {
    return ({
        type: 'PAYMENT_SUCCESS',
        data: data
    })
}

const payment_Action_Error = () => {
    return ({
        type: 'PAYMENT_ERROR'
    })
}

export const paymentThunk = () => {
    return dispatch => {
        dispatch(payment_Action_Started);
        var pd = {
            key: 'ddsvQ9xW',
            txnid: 'der45453',
            amount: 1000.00,
            firstname: "Prasanna",
            email: "dummy@gmail.com",
            phone: '',
            productinfo: 'Education',
            surl: 'http://localhost:3000/',
            furl: 'http://localhost:3000/',
            hash: ''
        };
        // var data = {
        //     'txnid': pd.txnid,
        //     'email': pd.email,
        //     'amount': pd.amount,
        //     'productinfo': pd.productinfo,
        //     'firstname': pd.firstname

        // }
        axios.post('http://localhost:8080/payment', pd).then((res) => {
            console.log(res.data);
            pd.hash = res.data.hash;
            window.bolt.launch(pd,{
                responseHandler : (res)=>{
                    console.log(res.response);
                    axios.post('http://localhost:8080/payment/response', pd).then((res) =>{
                        if(res.data){
                            console.log('success');
                            dispatch(payment_Action_Success(res));
                        }
                    }).catch((err) =>{
                        console.log('error' + err);
                    });
                },
                catchException : (res) =>{
                    console.log('error' + JSON.stringify(res));
                }
            });
            
        }).catch((err) => {
            console.log(err);
            dispatch(payment_Action_Error);
        })

    }
}
import axios from '@/libs/api.request'

export const login = ({userName, password}) => {
    const data = {
        email:userName,
        password:password
    }
    return axios.request({
        url:'http://w-api.test/index.php/api/managers/auth/login',
        params:data,
        method:'post',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'Accept':'application/x.w-api.v1+json'
        }
    });
    
    /*const data = {
        userName,
        password
    };
    return axios.request({
        url: 'login',
        data,
        method: 'post'
    })*/
};

export const getUserInfo = (token) => {
    return axios.request({
        url: 'get_info',
        params: {
            token
        },
        method: 'get'
    })
};

export const logout = (token) => {
    return axios.request({
        url: 'logout',
        method: 'post'
    })
};

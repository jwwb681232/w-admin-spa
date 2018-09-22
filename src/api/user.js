import axios from 'axios'

export const login = ({email, password}) => {
    const data = {
        email:email,
        password:password
    }
    return axios({
        url:'http://w-api.test/index.php/api/managers/auth/login',
        data,
        method:'post',
        headers:{
            // 'Content-Type':'application/x-www-form-urlencoded',
            'Accept':'application/x.w-api.v1+json'
        }
    })

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

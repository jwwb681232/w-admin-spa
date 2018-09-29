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
};

export const getUserInfo = (token) => {
    return axios({
        url:'http://w-api.test/index.php/api/managers/auth/info',
        method:'get',
        headers:{
            'Authorization':'bearer ' + token,
            'Accept':'application/x.w-api.v1+json'
        }
    })
};

export const logout = (token) => {
    return axios({
        url:'http://w-api.test/index.php/api/managers/auth/logout',
        method:'post',
        headers:{
            'Authorization':'bearer ' + token,
            'Accept':'application/x.w-api.v1+json'
        }
    })
};

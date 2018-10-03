import {login, logout, getUserInfo} from '@/api/user'
import {setToken, getToken} from '@/libs/util'

export default {
    state: {
        //email: '',
        userId: '',
        //avatorImgPath: '',
        token: getToken(),
        //access: ''
        roles: [],
        permissions: [],
        menus: []
    },
    mutations: {
        setAvator(state, avatorPath) {
            state.avatorImgPath = avatorPath
        },
        setUserId(state, id) {
            state.userId = id
        },
        setEmail(state, email) {
            state.email = email
        },
        setRoles(state, role) {
            state.roles = role
        },
        setToken(state, token) {
            state.token = token
            setToken(token)
        },
        setPermissions(state, permissions) {
            state.permissions = permissions
        },
        setMenus(state, menus) {
            state.menus = menus
        }
    },
    actions: {
        // 登录
        handleLogin({commit}, {email, password}) {
            email = email.trim()
            return new Promise((resolve, reject) => {
                login({email, password}).then(res => {
                    const data = res.data.data
                    commit('setToken', data.token)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 退出登录
        handleLogOut({state, commit}) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('setToken', '')
                    resolve()
                }).catch(err => {
                    reject(err)
                })
                // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
                // commit('setToken', '')
                // commit('setAccess', [])
                // resolve()
            })
        },
        // 获取用户相关信息
        getUserInfo({state, commit}) {
            return new Promise((resolve, reject) => {
                getUserInfo(state.token).then(res => {
                    const data = res.data.data
                    commit('setEmail', data.info.email)
                    commit('setUserId', data.info.id)
                    commit('setRoles', data.roles)
                    commit('setPermissions', data.permissions)
                    commit('setMenus', data.menus)
                    resolve(data)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}

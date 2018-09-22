<style lang="less">
    @import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleLogin">
        <div class="login-con">
            <Card icon="log-in" title="欢迎登录" :bordered="false">
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="email">
                            <Input v-model="form.email" placeholder="请输入用户名">
                            <span slot="prepend">
                                <Icon :size="16" type="person"></Icon>
                            </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                            <span slot="prepend">
                                <Icon :size="14" type="locked"></Icon>
                            </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: {
            emailRules: {
                type: Array,
                default: () => {
                    return [{required: true, message: '账号不能为空', trigger: 'blur'}]
                }
            },
            passwordRules: {
                type: Array,
                default: () => {
                    return [{required: true, message: '密码不能为空', trigger: 'blur'}]
                }
            }
        },
        data() {
            return {
                form: {
                    email: 'wx497657341@qq.com',
                    password: ''
                }
            }
        },
        computed: {
            rules() {
                return {
                    email: this.emailRules,
                    password: this.passwordRules
                }
            }
        },
        methods: {
            ...mapActions([
                'handleLogin',
                'getUserInfo'
            ]),
            handleSubmit() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        /*this.$emit('on-success-valid', {
                            email: this.form.email,
                            password: this.form.password
                        });*/
                        this.handleLogin(this.form)
                            .then(res => {
                                this.getUserInfo().then(res => {
                                    this.$router.push({
                                        name: 'home'
                                    })
                                })
                            })
                    }
                })
            }
        }
    }
    /*import loginForm from '_c/login-form'
    import {mapActions} from 'vuex'

    export default {
        components: {
            loginForm
        },
        methods: {
            ...mapActions([
                'handleLogin',
                'getUserInfo'
            ]),
            handleSubmit({email, password}) {
                this.handleLogin({email, password})
                    .then(res => {
                        this.getUserInfo().then(res => {
                            this.$router.push({
                                name: 'home'
                            })
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        }
    }*/
</script>

<style>

</style>

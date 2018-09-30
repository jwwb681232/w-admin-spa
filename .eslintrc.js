module.exports = {
    root: true,
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-parsing-error': [2, {'x-invalid-end-tag': false}],
        //空格
        'indent': [0],
        //方法跟名跟括号之间有空格
        'space-before-function-paren':[0],
        //箭头函数空格
        'arrow-spacing':[0],
        'semi':[0],
        //注释
        'spaced-comment':[0],
        'key-spacing':[0]
    }
}

// 和数据库交互逻辑
module.exports = {
    login: async(name,password) => {
        let data;
        if (name === 'Zmikoo' && password === '123456'){
            // data = `Hello ${name}!`
            data = {
                status: 0,
                msg: '登陆成功',
                data: {
                    name: 'Zmikoo'
                }
            }
        } else {
            // data = '账号信息错误'
            data = {
                status: -1,
                msg: '用户名或密码错误',
                data: {
                }
            }
        }
        return data;
    }
}
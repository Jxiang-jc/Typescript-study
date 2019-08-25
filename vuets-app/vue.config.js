module.exports = {
    // 反向代理
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: true,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'https://vuets-api.herokuapp.com/api/', // API服务器的地址
                ws: true, // 代理websockets
                changOrigin: true, // 虚拟的站点需要更改origin
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: arr => {}
    }
};

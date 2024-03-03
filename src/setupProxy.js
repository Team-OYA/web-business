const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * @since 2024.02.25
 * @author 이상민
 */
module.exports = function (app) {

    app.use(
        "/api/v1",  // 프록시 설정에서 /api/v1을 찾아서 서버의 URL로 대체
        createProxyMiddleware({
            target: "http://15.164.236.13:8080",
            changeOrigin: true,
        })
    );

    app.use(
        "/ws",
        createProxyMiddleware({
            target: "http://15.164.236.13:8080",
            ws: true,  // 웹소켓을 사용하겠다!
        })
    );

    // app.use(
    //     "/api/v1",
    //     createProxyMiddleware({
    //         target: "http://15.164.236.13:8080",
    //         changeOrigin: true,
    //     })
    // );
};

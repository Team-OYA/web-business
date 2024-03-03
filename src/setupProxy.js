const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * @since 2024.02.25
 * @author 이상민
 */
module.exports = function (app) {
    // API Proxy
    app.use(
        "/api/v1",
        createProxyMiddleware({
            target: "http://localhost:8080",
            changeOrigin: true,
        })
    );

    app.use(
        "/api/v1",
        createProxyMiddleware({
            target: `${process.env.REACT_APP_BASE_URL}`,
            changeOrigin: true,
        })
    );
};

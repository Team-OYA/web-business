const { createProxyMiddleware } = require("http-proxy-middleware");

/**
 * @since 2024.02.25
 * @author 이상민
 */
module.exports = function (app) {
    // API Proxy
    app.use(
        `${process.env.REACT_APP_API_PREFIX}`,
        createProxyMiddleware({
            target: `${process.env.REACT_APP_BASE_URL}`,
            changeOrigin: true,
        })
    );

    app.use(
        `${process.env.REACT_APP_CHAT_API_PREFIX}`,
        createProxyMiddleware({
            target: `${process.env.REACT_APP_BASE_URL}`,
            ws: true,  
        })
    );
};

module.exports = (targets) => {
    targets.of("@magento/venia-ui").routes.tap((routes) => {
        routes.push(
            {
                "name": "WalletPage",
                "pattern": "/wallet",
                "exact": true,
                "path": require.resolve("../components/WalletPage"),
                "authed": true,
                "redirectTo": "/sign-in"
            },
            {
                "name": "ReturnsPage",
                "pattern": "/returns",
                "exact": true,
                "path": require.resolve("../components/ReturnsPage"),
                "authed": true,
                "redirectTo": "/sign-in"
            }
        );
        return routes;
    })
}

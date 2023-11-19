async function emailRoutes(server) {
    server.get('/', () => {
        return 'hello world!!'
    });
}

module.exports = emailRoutes;

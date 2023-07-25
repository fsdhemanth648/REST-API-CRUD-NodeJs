const writeToFile = require('../utils/write-to-file');

module.exports = (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split('/')[3];
    const regex = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

    if (!regex.test(id)) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Validation Failed", message: "No id found for movie" }));
    } else if (baseUrl === '/api/movies/' && regex.test(id)) {
        const index = req.movies.findIndex((movie) => {
            return movie.id === id;
        });
        if (index === -1) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ title: "Not Found", message: "Movie not found" }));
        } else {
            req.movies.splice(index, 1);
            writeToFile(req.movies);
            res.writeHead(204, { "Content-Type": "application/json" });
            res.end(JSON.stringify(req.movies));

        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
    }
};
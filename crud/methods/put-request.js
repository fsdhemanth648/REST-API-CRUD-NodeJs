const requestBodyparser = require('../utils/body-parser');
const writeToFile = require('../utils/write-to-file');

module.exports = async (req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    let id = req.url.split('/')[3];
    const regex = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

    if (!regex.test(id)) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Validation Failed", message: "No id found for movie" }));
    } else if (baseUrl === '/api/movies/' && regex.test(id)) {
        try {
            let body = await requestBodyparser(req);
            const index = req.movies.findIndex((movie) => {
                return movie.id === id;
            });
            if (index === -1) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ title: "Not Found", message: "Movie not found" }));
            } else {
                req.movies[index] = { id, ...body };
                writeToFile(req.movies);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(req.movies[index]));

            }
        } catch (err) {
            console.log(err);
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ title: "Not Found", message: "Request body is not valid" }));
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
    }
};
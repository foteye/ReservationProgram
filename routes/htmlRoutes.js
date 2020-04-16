var path = require("path");
module.exports = function (nodeapp) {
    nodeapp.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    nodeapp.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    nodeapp.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

var tables = require("../data/tables");
var waitingList = require("../data/waitinglist");

module.exports = function (app) {
    app.get("/api/tables", function (req, res) {
        res.json(tables);
    });

    app.get("/api/waitinglist", function (req, res) {
        res.json(waitingList);
    });

    app.post("/api/tables", function (req, res) {
        if (tables.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitingList.push(req.body);
            res.json(false);
        }
    });
};

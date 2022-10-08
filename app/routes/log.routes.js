const controller = require("../controllers/log.controller");
const { verifyToken } = require("../middlewares/authJwt");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

    app.post("/api/logs/create", 
        // verifyToken, 
        controller.createLog);

        app.get("/api/logs/list-logs", 
        // verifyToken, 
        controller.getListLogs);

};
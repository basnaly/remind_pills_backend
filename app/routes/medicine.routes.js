const controller = require("../controllers/medicine.controller");
const { verifyToken } = require("../middlewares/authJwt");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

    app.post("/api/medicine/create", 
        // verifyToken, 
        controller.createNewMedicine);

        app.get("/api/medicine/list-medicines", 
        // verifyToken, 
        controller.getListMedicines);

};
const db = require("../models");
const Pill = db.pill;

exports.createNewPill = async (req, res) => {

    try {
        const pill = new Pill({
            ...req.body.pill,
            // createUser: req.userId, 
        });

        const result = await pill.save();

            console.log(result)
            res.status(200).send({
                message: "The pill was created!",
            });
        }

    catch(error) {
        res.status(500).send({ message: "Something went wrong" });
    }   
}

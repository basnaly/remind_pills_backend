const db = require("../models");
const Log = db.log;

exports.createLog = async (req, res) => {

    try {
        const log = new Log({
            ...req.body.log,
            // createUser: req.userId, 
        });

        const result = await log.save();

            console.log(result)
            res.status(200).send({
                message: "The log was created!",
            });
        }

    catch(error) {
        res.status(500).send({ message: "Something went wrong" });
    }   
}

exports.getListLogs = async (req, res) => {

    try {
        const result = await Log.find({

        }).select('_id medicineId quantity date time')
        .exec()

        console.log(result)

        let mappedListLogs = result.map(el => {
            return {
                id: el._id,
                medicineId: el.medicineId,
                quantity: el.quantity,
                date: el.date,
                time: el.time,
            }
        })

        res.status(200).send({
            listLogs: mappedListLogs,
        })
    }

    catch(error) {
        res.status(500).send({ message: "Something went wrong" });
    }
}

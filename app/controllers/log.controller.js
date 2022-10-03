const db = require("../models");
const Log = db.log;

exports.createNewLog = async (req, res) => {

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

        }).select('_id date time')
        .exec()

        console.log(result)

        let mappedListLogs = result.map(el => {
            return {
                id: el._id,
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

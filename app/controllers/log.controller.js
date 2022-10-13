const db = require("../models");
const Log = db.log;

exports.createLog = async (req, res) => {

    try {
        const log = new Log({
            ...req.body.log,
            // createUser: req.userId, 
        });

        const result = await log.save();

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

exports.deleteSelectedLog = async (req, res) => {

    try {
        const result = await Log.deleteOne({
            _id: req.query.logId, 
            // createUser: req.userId
        })

        if (result.deletedCount === 1) {
            res.status(200).send({
                message: 'The log was deleted!'})
        } else {
            res.status(500).send('Nothing was deleted!')
        }
    }

    catch(error) {
		res.status(500).send({ message: "Something went wrong" });
    } 
}

exports.updateLogData = async (req, res) => {
    try {
        const result = await Log.updateOne(
        {
            _id: req.query.logId,
            // createUser: req.userId
        }, 
        {
            ...req.body.log, // createUser may be here
            // createUser: req.userId, // rewrite createUser to avoid hacking
        }) 
        
        if (result.modifiedCount === 1) {
            res.status(200).send({
                message: 'Trip was updated!'
            })
        } else {
            res.status(400).send({
                message: 'Nothing was updated!'
            })
        }    
    }

    catch(error) {
        res.status(500).send({ message: "Something went wrong" });
    }
}

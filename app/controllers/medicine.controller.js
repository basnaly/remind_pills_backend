const db = require("../models");
const Medicine = db.medicine;

exports.createNewMedicine = async (req, res) => {

    try {
        const medicine = new Medicine({
            ...req.body.medicine,
            // createUser: req.userId, 
        });

        const result = await medicine.save();

            console.log(result)
            res.status(200).send({
                message: "The medicine was created!",
            });
        }

    catch(error) {
        res.status(500).send({ message: "Something went wrong" });
    }   
}

exports.getListMedicines = async (req, res) => {

    try {
        const result = await Medicine.find({

        }).select('_id name form quantity strength unit packAmount frequency interval time weekDay note')
        .exec()

        console.log(result)

        let mappedListMedicines = result.map(el => {
            return {
                id: el._id,
                name: el.name,
                form: el.form,
                quantity: el.quantity,
                strength: el.strength,
                unit: el.unit,
                packAmount: el.packAmount,
                frequency: el.frequency,
                interval: el.interval,
                time: el.time,
                weekDay: el.weekDay,
                note: el.note,
            }
        })

        res.status(200).send({
            listMedicines: mappedListMedicines,
        })
    }

    catch(error) {
        res.status(500).send({ message: "Something went wrong" });
    }
}

exports.saveEditedMedicine = async (req, res) => {

    try {
        const result = await Medicine.updateOne({
            _id: req.query.medicineId, 
        },
        {
            ...req.body.medicine,
           
        })

        console.log(result)

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
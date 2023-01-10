const LatestEvent = require("../models/latestEvent");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addLatestEvent = async (req, res) => {
    const latestEvent = new LatestEvent({
        title: req.body.title,
        desc: req.body.desc,
        image: req.body.image,
        sourceOfInfo: req.body.sourceOfInfo,
    });

    latestEvent
        .save()
        .then(() => res.status(200).json(latestEvent))
        .catch((err) => res.status(400).json("Error: " + err));
};

//----------------------------------------------------------------------->
exports.getLatestEvent = async (req, res) => {
    if (req.query.id !== undefined) {
        LatestEvent.find({ _id: req.query.id })
            .then((cal) => res.status(200).json(cal))
            .catch((err) => res.status(404).json("Error: " + err));
    } else {
        if (req.query.title) {
            const title = req.query.title.split("-").join(" ");
            console.log(title);
            return LatestEvent.find({ title: title })
                .then((news) => res.status(200).json(news))
                .catch((err) => res.status(400).json("Error: " + err));
        }
        LatestEvent.find({ show: true })
            .then((cal) => res.status(200).json(cal))
            .catch((err) => res.status(404).json("Error: " + err));
    }
};

exports.getLatestEventById = async (req, res) => {
    LatestEvent.find({ _id: req.params.id })
        .then((cal) => res.status(200).json(cal))
        .catch((err) => res.status(404).json("Error: " + err));
};

exports.getAllLatestEvent = async (req, res) => {
    LatestEvent.find({})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(404).json("Error: " + err));
};

//----------------------------------------------------------------------->
// exports.getLatestEventFromCategory = async (req, res) => {
//     const category = req.params.category;
//     LatestEvent.find({ LatestEventCategory: category })
//         .then(cal => res.status(200).json(cal))
//         .catch(err => res.status(404).json('Error: ' + err));
// }

//----------------------------------------------------------------------->
exports.updateLatestEvent = async (req, res) => {
    LatestEvent.findByIdAndUpdate(req.params.id, {
        $set: {
            title: req.body.title,
            desc: req.body.desc,
            image: req.body.image,
            sourceOfInfo: {
                name: req.body.sourceOfInfo.name,
                email: req.body.sourceOfInfo.email,
                designation: req.body.sourceOfInfo.designation,
                department: req.body.sourceOfInfo.department,
            },
        },
    })
        .then(() => res.status(200).json("Event Updated Successfully!"))
        .catch((err) => res.status(404).json("Error: " + err));
};

//----------------------------------------------------------------------->
exports.deleteLatestEvent = async (req, res) => {
    LatestEvent.findByIdAndUpdate(req.params._id, {
        $set: { show: false },
    })
        .then(() => res.status(200).json("Event deleted successfully!"))
        .catch((err) => res.status(404).json("Error: " + err));
};

const Ranking = require("../models/ranking");
//----------------------------------->

//----------------------------------------------------------------------->
exports.addRanking = async (req, res) => {
    const data = new Ranking({
        Ranking: req.body.Ranking,
        sourceOfInfo: req.body.sourceOfInfo,
    });

    data.save()
        .then(() => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.showRanking = async (req, res) => {
    Ranking.find({ show: true })
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.showRankingbyId = async (req, res) => {
    Ranking.findById(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.updateRanking = async (req, res) => {
    Ranking.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.status(200).send("Ranking updated successfully");
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.deleteRanking = async (req, res) => {
    Ranking.findByIdAndUpdate(req.params.id, { $set: { show: false } })
        .then(() => {
            res.status(200).send("Ranking deleted successfully");
        })
        .catch((err) => res.status(400).json("Error: " + err));
};

exports.showAllRanking = async (req, res) => {
    Ranking.find({})
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).json("Error: " + err));
};

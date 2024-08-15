const rootcontroller = (req, res) => {
    res.status(200).send({
        message: "welcome to the root controller",
    });
};
module.exports = rootcontroller;
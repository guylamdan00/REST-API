const newImage = (req, res, next) => {
    res.json({message: "Post new image"});
};

module.exports = {newImage};